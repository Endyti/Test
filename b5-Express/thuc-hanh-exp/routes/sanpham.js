var express = require('express');
var router = express.Router();
var spController = require('../controllers/sanpham.controllers');

// hien thi danh sach
router.get('/', spController.getList);
// hien thi form add
router.get('/add', spController.addProduct);
router.post('/add', spController.addProduct);
// phai export router
module.exports = router;