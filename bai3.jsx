import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Home = () => <h1>Đây là trang chủ</h1>;


const Login = () => <h1>Đây là trang đăng nhập</h1>;


const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>404 - Không tìm thấy trang</h1>
    <p>Trang bạn yêu cầu không tồn tại.</p>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Route mặc định - Trang 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
