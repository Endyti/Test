var express = require('express');
var app = express();

// tạo trang
app.get('/', (req, res)=>{
    res.send('<h1>Xin chào cả lớp');
});
app.get('/gioithieu.php', (req,res)=>{
    res.send(' trang giới thiệu')
});
app.listen(8080, (err)=>{
    if(err)
       console.log(err);

    console.log("server đang chạy")   ;
});