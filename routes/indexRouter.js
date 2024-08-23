const express = require('express');
const {getMessages} = require('../db/queries');
const {formatDistanceToNow} = require('date-fns');
const newRouter = require('./newRouter');
const messageRouter = require('./messageRouter')

const router = express.Router();


router.get('/',async (req, res)=>{
  const msgs = await getMessages();
  //adding a new member in msg i.e. added_ago 
  const msgWithAgo = msgs.map(msg=>({...msg, added_ago: formatDistanceToNow(msg.added, { addSuffix: true })})) 
  res.render('index', {messages:msgWithAgo});
})

router.use('/new', newRouter);
router.use('/message', messageRouter);


router.get("*", (req, res, next)=>{
  next(new Error('Page not found'))
})

module.exports = router;