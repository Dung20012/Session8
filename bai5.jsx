import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


const Home = () => <h2>Đây là trang Home</h2>;
const Product = () => <h2>Đây là trang Product</h2>;
const Detail = () => <h2>Đây là trang Detail</h2>;


const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
    textDecoration: "underline",
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="/product"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Product
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="/detail"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Detail
      </NavLink>
    </nav>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
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
