import { Link } from "react-router-dom"
export const MovieItem = ({ movie }) => (
    <div className="movie-item">
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt="" />
        </div>
        <div className="movie-excerpt">
            <h3 className="movie-title">{movie.title}</h3>
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">Ver detalhes</Link>
        </div>
    </div>
);