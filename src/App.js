// Modules
import React from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import All from './Pages/All';
import Fishing from './Pages/Fishing'
import Coffee from './Pages/Coffee';
import MapleStory from './Pages/MapleStory';

const App = () => {
  console.log(useLocation().pathname)
  return (
    <div className="App">
      {/* Top Navigation */}
      {
        // 현재 사용자의 경로가 '/fishing'이 아닐 경우에만 Navigation을 노출
        useLocation().pathname !== '/fishing' &&
        <nav>
          <Link to='/'>All</Link>
          <Link to='/coffee'>Coffee</Link>
          <Link to='/maplestory'>MapleStory</Link>
        </nav>
      }

      {/* Router */}
      <Routes>
        <Route path='/' element={<All />} exact={true} />
        <Route path='/fishing' element={<Fishing />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/maplestory' element={<MapleStory />} />
      </Routes>
    </div>
  )
}

export default App;