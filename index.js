require('dotenv').config()
// import 'dotenv/config'
const express =  require('express')
// import 'express' from express
const app = express()
const port = process.env.PORT

app.get('/',(req,res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT,() => {
  console.log(`This sever is running on ${port}`);
})