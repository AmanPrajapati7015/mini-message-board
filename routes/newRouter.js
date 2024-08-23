const express = require('express');
const {addMessage} = require('../db/queries');

const router = express.Router();

router.get('/', (req, res)=>{
  res.render('new', {title:'Add New Message'});
})

router.post('/', async (req, res)=>{
  const msg = { username : req.body.user, message: req.body.text};
  await addMessage(msg);
  res.redirect('/');
})

module.exports = router;
