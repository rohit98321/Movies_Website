
import MovieCard from './MovieCard'
import {useSelector } from 'react-redux'



const Home = () => {


   
    const movies=useSelector((state)=> state.movie.movies || [])

    console.log(movies);

      const renderMovies= movies.map((movie)=>(
        <MovieCard key={movie._id} movie={movie}/>
    ))

     
  return (
    <div className='grid grid-cols-2 p-10 sm:grid-cols-3 mx-auto md:grid-cols-6 gap-4 z-5'>

      {
       ( movies.length>0) 
        ?
       

          renderMovies
       

        :
        (
          
          <p>loading...</p>
        )


        }

           

    </div>
  )
}

export default Home