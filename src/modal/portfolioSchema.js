const mongoose=require('mongoose');
const express=require('express');


const mySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    comments:{
        type:String,
        required:true
    }
})

const Comment=new mongoose.model('comment',mySchema);

module.exports=Comment;