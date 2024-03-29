const express=require('express');
const User=require('./models/User')
const Orders=require('./models/Orders')
const app=express();
const port=5000;

const mongodb=require('./db')

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin" ,"http://localhost:3000");
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
);
next();
})

mongodb();


app.use(express.json());
app.use('/api', require("./Routes/CreateUser"))

app.use('/api', require("./Routes/DisplayData"))

app.use('/api', require("./Routes/OrderData"))

app.get('/data',(req,res)=>{
    res.send('hello word')
})



app.get('/',async(req,res)=>{

    let userArray=await User.find()
    console.log(userArray)
        res.send(userArray)
    })

    app.get('/order',async(req,res)=>{

        let orderArray=await Orders.find()
        console.log(orderArray)
            res.send(orderArray)
        })
    
app.listen(port,()=>{
    console.log(`running on ${port}` )
})


