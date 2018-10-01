import axios from 'axios';

export const getMovies = name => async dispatch => {
  try {
    const response = await await axios.get(
      'https://api.themoviedb.org/3/search/movie?query=' +
        name +
        '&api_key=4145d8d357ac5c9e1cca2bf183d7d225'
    );
    dispatch({
      type: 'FETCH_MOVIES',
      payload: response.data.results
    });
  } catch (err) {
    console.log('err');
  }
};

export const addNotes = text => {
  return {
    type: 'USER_NOTE',
    payload: text
  };
};
