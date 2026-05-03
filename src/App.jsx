import Nav from './pages/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
        <Nav></Nav>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App