const express=require('express');
const Comment=require('../modal/portfolioSchema');
const router=new express.Router();

router.post(process.env.api_path, async (req,res)=>{
    try {
        const newComment=new Comment({
            name:req.body.Name,
            email:req.body.email,
            comments:req.body.comments
        })
        const addedComment=await newComment.save();
        res.render('index');
        
    } catch (error) {
        res.send(error);
    }
})
module.exports=router;