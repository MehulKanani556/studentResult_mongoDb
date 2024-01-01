var user = require('../model/usermodel');


exports.insert = async(req,res)=>{
    var data = await user.create(req.body);
    var s1 =Number( req.body.s1);
    var s2 =Number(req.body.s2);
    var s3 =Number( req.body.s3);
    var s4 =Number( req.body.s4);
    var s5 = Number(req.body.s5);
   var total = s1+s2+s3+s4+s5;
   var rno=req.body.rollno;
   var data2 = await user.findOneAndUpdate({ rollno: rno }, { total: total });

     res.status(200).json({
        status:'success',
        data2,
        data
     })
}
exports.select = async(req,res)=>{
    var data = await user.find();

     res.status(200).json({
        status:'success',
        data
     })
}
exports.delete = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id);

     res.status(200).json({
        status:'success',
        data
     })
}
exports.update = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);

     res.status(200).json({
        status:'success',
        data
     })
}