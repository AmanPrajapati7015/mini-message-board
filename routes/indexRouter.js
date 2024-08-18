const express = require('express');

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res)=>{
  res.render('index', {title: 'Mini Messageboard',messages});
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
    next(new Error('Message does not exsist'));
  }
  else
    res.render('message', {message:messages[id]});
})



router.get("*", (req, res, next)=>{
  next(new Error('Page not found'))
})

module.exports = router;