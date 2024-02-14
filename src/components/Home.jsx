import React from 'react'
import BreakingNews from './BreakingNews'
import Others from './Others'

const Home = () => {
  return (
    <div className="w-full h-96 px-2 flex">
        <BreakingNews/>
        <Others/>
    </div>
  )
}

export default Home