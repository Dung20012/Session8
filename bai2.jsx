import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <h1>Đây là trang đăng nhập</h1>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <label>Mật khẩu: </label>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
