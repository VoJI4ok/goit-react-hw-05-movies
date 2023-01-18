import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Outlet,  } from 'react-router-dom';
import { searchMovieToIdApi } from '../Utils/Api';
import { useLocation } from 'react-router-dom';
import {Button , Movielist} from './MovieDetail.styled'
const MovieDetails = () => {
  const START_URL = 'https://image.tmdb.org/t/p/w500/';
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();



  useEffect(() => {
    searchMovieToIdApi(movieId).then(data => setDetails(data));
  }, [movieId]);
 
  const { title, poster_path, vote_average, overview, genres } = details;
  return (
    <>
      <Button to={location.state || '/'}>Go back</Button>
      <img src={`${START_URL}${poster_path}`} alt={title}></img>
      <h1>{title}</h1>
      <p>User score : {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Ganres</h2>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>

      <h3>Additional information</h3>
      <Movielist>
        
          <Button state={location.state} to="cast">
            Cast
          </Button>
    
          <Button state={location.state} to="reviews">
            Reviews
          </Button>
        
      </Movielist>

      <Outlet />
    </>
  );
};

export default MovieDetails;