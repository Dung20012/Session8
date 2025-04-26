import React from 'react'

export default function Login() {
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
  )
}
