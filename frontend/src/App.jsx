import {useEffect} from 'react'
import Mainroutes from './routes/Mainroutes'

import { asyncgetmovies } from "./redux/actions/movieAction"
import { asyncGetUser } from "./redux/actions/userAction"
import { useDispatch } from 'react-redux'
import BubbleNav from './nav/BubbleNav'

const App = () => {



  
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(asyncgetmovies())
    dispatch(asyncGetUser())
    
    }, [])
  return (
    <div className='text-2xl text-indigo-50 bg-[#016B61] p-20 w-screen h-full'>
    
    <BubbleNav/>
    <Mainroutes/>
    </div>
  )
}

export default App