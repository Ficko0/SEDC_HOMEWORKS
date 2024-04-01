import { ObjectId } from 'mongodb';
import Movie from "../models/movie.models.js";

export class MovieService {
  static movies = [];

  static getAllMovies({ releaseYear, rating }) {
    // we can use the searchQuery object to build the query dynamically
    let searchQuery = {};

    // if we have a releaseYear, we add it to the searchQuery object and filter by it
    if (releaseYear) {
      searchQuery.releaseYear = Number(releaseYear);
    }

    // if we have a rating, we add it to the searchQuery object and filter by it
    if (rating) {
      searchQuery.rating = Number(rating);
    }

    // we return the result of the query, which will be an array of movies filtered by the searchQuery object
    return Movie.find(searchQuery);
  }

  static getMovieById(movieId) {
    return Movie.findById(movieId);
  }

  static createMovie(movieData) {
    // this returns the whole collection
    // it returns a promise and it works async
    const movie = new Movie(movieData);
    // the .save() method saves the instance of the new Movie created above. The new Movie(movieData) is an instance of the Movie.
    return movie.save();
  }

  static updateMovie(movieId, updateData) {
    return Movie.findByIdAndUpdate(movieId, updateData, { new: true });
  }

  static deleteMovie(movieId) {
    return Movie.findByIdAndDelete(movieId);
  }
}
