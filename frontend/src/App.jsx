import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './nav/Nav'

const App = () => {
  return (
    <div className='text-2xl text-indigo-50 bg-neutral-800 w-svw h-svh'>
    
    <Nav/>
    <Mainroutes/>
    </div>
  )
}

export default App