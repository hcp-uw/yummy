import './App.css'
import Display from './components/display'
import Search from './components/search'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/display">
          <button type ="button">
            display ingredients pls
          </button>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  )
}

export default App;
