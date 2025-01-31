import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('It works');
    
});

// set cookie
app.get('/set-cookie-manually', (req,res)=>{

    //http approach
    // res.writeHead(200,{
    //     'Set-Cookie': 'username=lubaka',
    // });

    //express approach
    res.setHeader('Set-Cookie', 'username=lyubaka2');


    res.end();
});

//read cookie
app.get('/get-cookie', (req,res)=>{
    const cookie = req.header('Cookie');

    console.log(cookie);
    res.end();
});

//set cookies with cookie parser library
app.get('/set-cookie',(req,res)=>{
    res.cookie('username','lyubaka3');
    res.end();
})


app.listen(5001,()=> console.log('Server is listening on http://localhost:5001....'));