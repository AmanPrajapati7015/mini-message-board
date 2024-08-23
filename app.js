require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);



app.use((err, req, res, next)=>{
    res.render('error',{errorMsg:err.message});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`started your app on {PORT} port`));