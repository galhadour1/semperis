import Movie from "../../interfaces/movie";
import { UpdateSearchedMoviesAction } from "../actions/searchedMoviesActions";
import { ACTIONS } from "../../utils/constans";

export interface SearchedMoviesState {
  searchedMovies: Movie[];
}

const initialState: SearchedMoviesState = {
  searchedMovies: [],
};

const searchedMoviesReducer = (
  state = initialState,
  action: UpdateSearchedMoviesAction
): SearchedMoviesState => {
  switch (action.type) {
    case ACTIONS.UPDATE_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    default:
      return state;
  }
};

export default searchedMoviesReducer;
