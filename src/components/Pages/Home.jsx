import { useEffect, useState } from 'react';

import { searchMovieTopApi } from '../Utils/Api';
import MovieList from '../Movie/MovieList';

const Home = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    searchMovieTopApi().then(data => setMovie(data));
  }, []);

  return <MovieList movies={movies} />;
};

export default Home;