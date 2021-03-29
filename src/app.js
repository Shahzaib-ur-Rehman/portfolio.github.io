require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const static_path=path.join(__dirname,'../public');
const port= process.env.PORT || 3000;
require('./DB/portfolioConnectionDb');
const Comment=require('./modal/portfolioSchema');
const app=express();
const router=require('./Router/router');
const hbs=require('hbs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const views_path=path.join(__dirname,'../templates/views');
const partial_path=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',views_path);
app.use(router);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));


app.get('', (req,res)=>{
    res.render('index');
})









app.listen(port);

