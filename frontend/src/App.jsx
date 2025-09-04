import {useEffect} from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './nav/Nav'
import { asyncgetmovies } from "./redux/actions/movieAction"
import { useDispatch } from 'react-redux'

const App = () => {



  
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(asyncgetmovies())
    
    }, [])
  return (
    <div className='text-2xl text-indigo-50 bg-neutral-800 p-2 w-screen h-full'>
    
    <Nav/>
    <Mainroutes/>
    </div>
  )
}

export default App