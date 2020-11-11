const MovieSchema = require('../models/MovieModel.js');

module.exports.controller = (app) => {
  // fetch all movies
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, '', (error, movies) => {
      if (error) { console.log(error); }
      res.send({
        movies,
      });
    });
  });

  // fetch a single movie
  app.get('/api/movies/:id', (req, res) => {
    console.log(res)
    MovieSchema.findById(req.params.id, 'name description releaseYear genre', (error, movie) => {
      if (error) { console.log(error); }
      console.log(res)
      res.send(movie);
    });
  });

  // add a new movie
  app.post('/movies', (req, res) => {
    const newMovie = new MovieSchema({
      name: req.body.name,
      description: req.body.description,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
    });

    newMovie.save((error, movie) => {
      if (error) { console.log(error); }
      res.send(movie);
    });
  });
};