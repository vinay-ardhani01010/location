const express = require('express')
var app = express()
const fetch = require('node-fetch')
app.set('trust proxy',true)
const port  = 4000
var ip = 0;
app.get('/',(req,res)=>{
  var ip = req.ip;
})
fetch('http://www.geoplugin.net/json.gp/')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err.message);
  })

app.listen(port,()=>{
  console.log('server is listining at port 4000')
})