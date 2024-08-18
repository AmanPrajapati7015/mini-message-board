const express = require('express');

const router = express.Router();

const messages = [
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    user: "Amando",
    added: new Date()
  },
  {
    text: "The only way to do great work is to love what you do.",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res)=>{
  res.render('index', {messages});
})

router.get('/new', (req, res)=>{
  res.render('new', {title:'Add New Message'});
})

router.post('/new', (req, res)=>{
  messages.unshift({...req.body, added:new Date()});
  res.redirect('/');
})


router.get('/message/:id', (req, res, next)=>{
  const id = req.params.id;
  if(id>=messages.length){
    next(new Error('This message does not exsist'));
  }
  else
    res.render('message', {message:messages[id]});
})



router.get("*", (req, res, next)=>{
  next(new Error('Page not found'))
})

module.exports = router;