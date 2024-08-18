const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);


app.use((err, req, res, next)=>{
    res.send(err.message);
});

app.listen(3000, ()=>console.log('started your app on 3000 port'));