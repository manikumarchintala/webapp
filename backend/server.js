import express from 'express';
let port = 3000;
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello from server")
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})