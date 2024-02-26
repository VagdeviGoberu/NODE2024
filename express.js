const express = require('express')

const app = express()


app.listen(3003,() => {
    console.log('express server started...');
})

app.get("/",(req,res) => {
    res.send('Home page')
})
app.get("/about",(req,res) => {
    res.send('about page')
})


