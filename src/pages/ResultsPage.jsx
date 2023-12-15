import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Loading from "../components/Loading";
import { options } from "../constants/constant";
import MovieCard from "../components/MovieCard";

const ResultsPage = () => {

const [searchParams] = useSearchParams()
const [results,setResults] = useState([])
const query = searchParams.get("search_query")


useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=tr-TR&page=1`,
        options,
      )
      .then((res) => setResults(res.data.results))
      .catch((error) => alert("Error fetching search results:", error));
  }, [query]);

console.log(results)
  return (
    <div>
      {results.length > 0 ? (
       results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <Loading/>
      )}
    </div>
  );
};


export default ResultsPage