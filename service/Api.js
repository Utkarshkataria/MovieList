export const fetchMovieApi = () => {
    // const params = { email: email, password: password };
    // console.log('version : ' + version)

    return fetch('https://api.themoviedb.org/3/movie/popular' +'?'+'api_key='+'656fe6c0a343eacc0e130a8057a83f28'+ '&'+'language='+'en-US'+'&'+'page='+'1',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('response')
        console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};