import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";


export function useMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesService.getMovies().then(({ data }) => {
            const updatedMovies = data.results.map((movie) => ({
                ...movie,
                image_url: `https://image.tmdb.org/t/p/w400${movie.poster_path}`,
            }));
            setMovies(updatedMovies);
        });
    })

    return movies;
}