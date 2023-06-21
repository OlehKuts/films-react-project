export const getMovies = async (url, params='') =>{
    try {
      const response = await fetch(`${url}${params}`);
      const responseJSON = await response.json();
      const receivedMovies = responseJSON.Search;
      return receivedMovies
    } catch (e) {
      console.error(e);
    } 
  } 