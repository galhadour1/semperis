import Genre from "../../interfaces/Genre";
import { ACTIONS } from "../../utils/constans";

export interface UpdateSelectedGenreAction {
  type: string;
  payload: Genre;
}

export const updateSelectedGenre = (
  selectedGenre: Genre
): UpdateSelectedGenreAction => ({
  type: ACTIONS.UPDATE_SELECTED_GENRE,
  payload: selectedGenre,
});
