import { Injectable } from '@nestjs/common';

interface Movie {
  id: number;
  name: string;
  rating: number;
}

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      name: 'Superman',
      rating: 10,
    },
    {
      id: 2,
      name: 'SpiderMan',
      rating: 5,
    },
  ];

  getMovies() {
    return this.movies;
  }

  createMovie(movieData: any) {
    const movie = {
      id: this.movies.length + 1,
      ...movieData,
    } satisfies Movie;

    this.movies.push(movie);
  }

  updateMovie(id: number, updateData: any) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          ...updateData,
        };
      }
      return movie;
    });
  }

  updateMovieRating(id: number, ratingCount: number) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        movie.rating = ratingCount;
      }
      return movie;
    });
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
}
