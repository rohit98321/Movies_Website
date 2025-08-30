import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './nav/Nav'

const App = () => {
  return (
    <div className='text-2xl text-indigo-50 bg-neutral-800 p-2 w-screen h-full'>
    
    <Nav/>
    <Mainroutes/>
    </div>
  )
}

export default App