import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send('It works');
    
});


app.listen(5001,()=> console.log('Server is listening on http:/localhost:5001....'));