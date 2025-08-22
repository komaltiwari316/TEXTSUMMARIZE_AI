const express=require('express')
const app=express();
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use('/ai',aiRoutes)

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})