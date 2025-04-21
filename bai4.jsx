import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Home = () => <h1>Đây là trang chủ</h1>;


const Contact = () => <h1>Đây là trang liên hệ</h1>;


const Navbar = () => (
  <nav style={{ marginBottom: "20px" }}>
    <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
