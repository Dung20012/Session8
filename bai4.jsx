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
        <Route path='/' element={<Home />} /> // khi đg dẫn 5173 sẽ là home contact home
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> // khi xuộc vào contact sẽ hiển thị là home contact home
        <Route path='/login' element={<Login />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
