
import MovieCard from "./MovieCard";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Home = () => {
  const movies = useSelector((state) => state.movie.movies || []);

  console.log(movies);

  const renderMovies = movies.map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ));

  return (
    <div className="grid grid-cols-1 p-10 sm:grid-cols-3 mx-auto md:grid-cols-6 gap-4 z-5">
      {movies.length > 0 ? renderMovies : <div className="flex justify-center items-center h-2">
    <ClipLoader color="#3b82f6" size={40} />
  </div>}
    </div>
  );
};

export default Home;
