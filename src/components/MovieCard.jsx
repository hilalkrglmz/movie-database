
import { Link } from "react-router-dom";



const MovieCard = ({ movie }) => {


  const truncate = (text, limit) => (text.split(' ').length > limit ? `${text.split(' ').slice(0, limit).join(' ')}...` : text);

  const truncatedOverview = truncate(movie.overview, 15);
console.log(movie)

    return (
      <Link to={`/detay/${movie.id}`} className="card-link d-flex cursor-pointer">
      <div className="movie-card">
        <div className="card-img">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="card-desc">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{truncatedOverview}</p>
          </div>
        </div>
      </div>
    </Link>
    

    );
  };
  
 export default MovieCard;
  