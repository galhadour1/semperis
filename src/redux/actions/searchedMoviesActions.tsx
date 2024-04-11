import Movie from "../../interfaces/movie";
import { ACTIONS } from "../../utils/constans";

export interface UpdateSearchedMoviesAction {
  type: string;
  payload: Movie[];
}

export const updateSearchedMovies = (
  searchedMovies: Movie[]
): UpdateSearchedMoviesAction => ({
  type: ACTIONS.UPDATE_SEARCHED_MOVIES,
  payload: searchedMovies,
});
