const mongoose=require('mongoose');

mongoose.connect(process.env.db_con,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected Successfully');
}).catch((E)=>{
    console.log(E);
})
