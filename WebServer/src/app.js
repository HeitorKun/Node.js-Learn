const path = require('path')
const express = require('express')

const app = express()
const pathToPublicDir = path.join(__dirname, '../public')

app.use(express.static(pathToPublicDir))

app.get('', (req, res) => {
    res.send('hello express')
})

app.get('/help', (req, res) => {
    res.send('help page')
})

app.listen(3000, () => {
    console.log('server on port 3000')
})


