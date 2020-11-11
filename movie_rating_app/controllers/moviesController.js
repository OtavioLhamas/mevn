const MovieSchema = require('../models/MovieModel.js');
const passport = require('passport');

module.exports.controller = (app) => {
  // fetch all movies
  app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
    MovieSchema.find({}, '', (error, movies) => {
      if (error) { console.log(error); }
      res.send({
        movies: movies,
        currentUser: req.user,
      });
    });
  });

  // fetch a single movie
  app.get('/movies/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    MovieSchema.findById(req.params.id, 'name description releaseYear genre', (error, movie) => {
      if (error) { console.log(error); }
      res.send({ 
        movie: movie, 
        currentUser: req.user
      });
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