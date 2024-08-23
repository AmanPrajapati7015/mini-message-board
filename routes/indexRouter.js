const express = require('express');
const {getMessages,addMessage, getMessageById} = require('../db/queries');
const {formatDistanceToNow} = require('date-fns');


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

router.get('/',async (req, res)=>{
  const msgs = await getMessages();
  //adding a new member in msg i.e. added_ago 
  const msgWithAgo = msgs.map(msg=>({...msg, added_ago: formatDistanceToNow(msg.added, { addSuffix: true })})) 
  res.render('index', {messages:msgWithAgo});
})

router.get('/new', (req, res)=>{
  res.render('new', {title:'Add New Message'});
})

router.post('/new', async (req, res)=>{
  const msg = { username : req.body.user, message: req.body.text};
  await addMessage(msg);
  res.redirect('/');
})


router.get('/message/:id', async(req, res, next)=>{
  const id = req.params.id;
  const row = await getMessageById(id);
  
  if(row.length != 0)
    res.render('message', {message:row[0]});
  else
    next(new Error('This message does not exsist'));
})



router.get("*", (req, res, next)=>{
  next(new Error('Page not found'))
})

module.exports = router;