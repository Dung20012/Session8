import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> // xuộc đường link about để đi vào trang 404-not found
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
