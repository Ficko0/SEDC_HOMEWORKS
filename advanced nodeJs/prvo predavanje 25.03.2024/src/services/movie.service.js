export default class MovieService {
    static movies = [];

    static async getAllMovies () {
        return this.movies;
    }
}