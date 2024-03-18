const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send("anjali isngh")
})
app.get('/login',(req,res) =>{
    res.send('<h1>please login <h1>')
})
app.get('/youtube', (req,res) =>
{
res.send('<h1>chai aur code<h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})