import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


const users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Trần Thị B", email: "b@gmail.com", address: "TP.HCM" },
  { id: 3, name: "Lê Văn C", email: "c@gmail.com", address: "Đà Nẵng" },
];


const ListUser = () => {
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>Không tìm thấy người dùng!</p>;

  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Họ tên:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
      <Link to="/"><button>Quay lại</button></Link>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/user/:id" element={<UserDetail />} />
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
