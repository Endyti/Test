exports.getList = (req, res, next)=>{
    let bien = "Endity";
    let objSP = {id:1, name: 'Dien thoai', price: 100000 }
   res.render('sanpham/list', {user: bien, sp: objSP});
}

exports.addProduct = (req, res, next)=>{
    console.log(req.url);
    console.log(req.body); // du lieu post
    let ten_sp='';
    if(typeof(req.body.tensp)!='underfined')
       ten_sp  = req.tensp;

  res.render('sanpham/add', {msg:"Du lieu: "+ten_sp});
}