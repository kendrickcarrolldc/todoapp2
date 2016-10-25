const express = require('express');
let router = express.Router();
var Test = require('../models/test.js')

router.route('/')
  .get((req,res) => {
    Test.find({}, (err, tests) => {
      res.status(err ? 400 : 200).send(err || tests)
    })
    // res.send("test")
  })
  .post((req,res) => {
    Test.create(req.body, (err, test) => {
      console.log('REQUESTTTTTTTTTTTTTTTTT',req);
      res.status(err ? 400 : 200).send(err || test)
    })
  })

  router.route('/:id')
    .put((req,res) => {
      Test.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, test) => {
        res.status(err ? 400 : 200).send(err || test)
      })
    })
    .delete((req,res) => {
      Test.findByIdAndRemove(req.params.id, err => {
        res.status(err ? 400 : 200).send(err )
      })
    })
module.exports = router;
