import express from 'express';

const app = express();


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
})


app.listen(5001,()=> console.log('Server is listening on http://localhost:5001....'));