import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import Detail from './pages/detail/Detail'
import ListUser from './components/ListUser'
import UserDetail from './components/UserDetail'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/listuser' element={<ListUser />} /> // xuộc vào đường dẫn listuser dẫn tới trang listuser
        <Route path='/user/:id' element={<UserDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
