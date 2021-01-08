const express = require('express')
require("dotenv").config()
require("./models/db")
const Movie=require("./models/Movie")
const { movies } = require("./movies");
const app = express()
const port = 3000

app.set("view engine", "ejs");

app.get('/hello', async (req, res) => {
    const items=await Movie.find()
    res.send(items)
    /*res.render('hello', {
        movies: items
    })*/

})

app.get('/', async (req, res) => {
    const items=await Movie.find()
    res.render('index', {
      movies: items
    })
})

app.get('/cinema', (req, res) => {
    res.render('cinema')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/film/:title', (req, res) => {
    // const { title } = req.params;
    const title = req.params.title;

    res.render('film', {
        // movie: movies.find(item => (item.title.toLowerCase() === title)),
        movie: movies.find(item => {
            if(item.title.toLowerCase() === title) {
                return true;
            } else {
                return false;
            }
        })
    })
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
