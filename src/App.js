// Modules
import React from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import All from './Pages/All';
import Fishing from './Pages/Fishing'
import Coffee from './Pages/Coffee';
import MapleStory from './Pages/MapleStory';

// Styles
import './CSS/Reset.css'
import './CSS/Common.css'
import './CSS/Main.css'
import './CSS/Layout.css'

const App = () => {
  return (
    <div className="App">
      {/* Top Navigation */}
      <h1 className='navigation-title'>카카오톡 낚시</h1>
      {
        // 현재 사용자의 경로가 '/fishing'이 아닐 경우에만 Navigation을 노출
        useLocation().pathname !== '/fishing' &&
        <nav className="navigation-container">
          <Link to='/' className="navigation-item">전체</Link>
          <Link to='/coffee' className="navigation-item">커피</Link>
          <Link to='/maplestory' className="navigation-item">메이플</Link>
        </nav>
      }

      {/* Router Setting */}
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