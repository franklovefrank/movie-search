const express = require("express");
const path = require("path")
const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();

const MOVIE_DB_API_KEY = '5d943d6eb3e526a3d483e65c25762e8f';
const OMDB_API_KEY = 'd3595fdbp';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get("/search/", async (req, res) => {
    try {
        const movieList = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&query=${encodeURIComponent(req.query.queryString)}&page=${req.query.page}&include_adult=false`
        );
        const movieListJSON = await movieList.json();
        res.json(movieListJSON);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error obtaining results");
    }
});

app.get("/tmdb-data/", async (req, res) => {
    const movie = await fetch(
        `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`
    );
    const movieJSON = await movie.json();
    res.json(movieJSON);
});

app.get("/imdb-data/", async (req, res) => {
    const data = await fetch(`http://www.omdbapi.com/?i=${req.query.id}&apikey=${process.env.OMDB_API_KEY}`);
    const dataJSON = await data.json();
    res.json(dataJSON);
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});


app.listen(process.env.PORT || 5000, () => console.log(`Server running on ${process.env.PORT || 5000}!`));
