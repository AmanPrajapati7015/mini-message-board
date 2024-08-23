const pool = require('./pool')

async function getMessages() {
    const {rows} = await pool.query('select * from messages order by added desc');
    return rows;
}

async function addMessage({username, message}) {
    await pool.query('INSERT INTO messages (username, message) VALUES ($1, $2)', [username, message]);
    console.log('added');
}

async function getMessageById(id) {
    const {rows} = await pool.query('select * from messages where id=$1',[id]);
    return rows;
}

module.exports = {getMessages,addMessage, getMessageById};
