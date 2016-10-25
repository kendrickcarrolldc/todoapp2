const express = require('express')
let router = express.Router();
router.use('/tests', require('./tests'))
// router.use('/index', require('./notes/index'))
// router.use('/note.controller', require('./notes/note.controller'))
// router.use('/note.model', require('./notes/note.model'))


// router.route('/')
//   .get('/',(req,res) => {
//     res.send('api route hit')
//   })
  // router.get('/',(req,res) => {
  //   res.send('hit\n')
  // })

module.exports = router;
