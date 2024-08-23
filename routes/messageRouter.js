const express = require('express');
const {getMessageById} = require('../db/queries');

const router = express.Router();


router.get('/:id', async(req, res, next)=>{
  const id = req.params.id;
  const row = await getMessageById(id);

  if(row.length != 0)
    res.render('message', {message:row[0]});
  else
    next(new Error('This message does not exsist'));
})


module.exports = router;