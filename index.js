import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

const app = express();

app.use(cookieParser());
app.use(expressSession({
    secret: 'THATSMYSECRET',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}))

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

//get cookie manually
app.get('/get-cookie-manually', (req,res)=>{
    const cookie = req.header('Cookie');

    console.log(cookie);
    res.end();
});

//set cookies with cookie parser library
app.get('/set-cookie',(req,res)=>{
    res.cookie('username','lyubaka3');
    res.end();
});

//get cookie with library
app.get('/get-cookie', (req,res)=>{
    const cookie = req.cookies['username'];
    console.log(cookie);
    res.end();
});

//session demo
app.get('/set-session-data/:name', (req,res)=>{
    req.session.name = req.params.name;
    req.session.age = 20;


    res.end();
});

//get session data
app.get('/get-session-data',(req,res)=>{
    console.log(req.session);
    res.send(req.session.name);
})


app.listen(5001,()=> console.log('Server is listening on http://localhost:5001....'));