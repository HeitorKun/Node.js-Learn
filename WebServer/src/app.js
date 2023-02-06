const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//paths for express config
const pathToPublicDir = path.join(__dirname, '../public')
const pathToViews = path.join(__dirname, '../templates/views')
const pathToPartials = path.join(__dirname, '../templates/partials')

// set up habdle bars and view folder location
app.set('view engine', 'hbs')
app.set('views', pathToViews)
hbs.registerPartials(pathToPartials)

//setup static dir
app.use(express.static(pathToPublicDir))

app.get('', (req, res) => {
    res.render('index', 
    {
        title: "Weather",
        creator: "Heitor K."
    })
})

app.get('/about', (req, res) => {
    res.render('about', 
    {
        title: "Weather",
        creator: "Heitor K."
    })
})
app.get('*', (req, res) => {
    res.render('page404', 
    {
        title: "Weather",
        creator: "Heitor K."
    })
})

app.listen(3000, () => {
    console.log('server on port 3000')
})


