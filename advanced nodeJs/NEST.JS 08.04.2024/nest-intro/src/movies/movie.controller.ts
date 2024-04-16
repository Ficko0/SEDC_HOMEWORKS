import { MovieService } from './movie.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies') // route
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get() // same as router.get()
  getMovies(): any {
    return this.movieService.getMovies();
  }

  @Post()
  createMovie(@Body() body: any) {
    return this.movieService.createMovie(body);
  }

  @Put('/:id')
  updateMovie(@Body() body: any, @Param('id') id: string) {
    return this.movieService.updateMovie(Number(id), body);
  }

  @Patch('/:id/rating/:ratingCount')
  updateMovieRating(@Param() params: { id: string; ratingCount: String }) {
    return this.movieService.updateMovieRating(
      Number(params.id),
      Number(params.ratingCount),
    );
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(Number(id));
  }
}
