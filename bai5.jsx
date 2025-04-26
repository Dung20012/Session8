import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import Detail from './pages/detail/Detail'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> // 5173 sẽ ra home(đỏ) product detail
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} /> // xuộc vào product sẽ ra home product(đỏ) detail
        <Route path='/detail' element={<Detail />} /> // xuộc vào detail sẽ ra home product detail(đỏ)

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
