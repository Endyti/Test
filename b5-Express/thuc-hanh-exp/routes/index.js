var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/demo',(req, res, next)=>{
   res.send("<h1>Đề mô gì đó</h1>");
})

module.exports = router;
