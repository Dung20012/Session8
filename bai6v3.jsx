import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams(); // Lấy id từ URL

    const users = [
        { id: 1, name: "Nguyễn Văn A  ", email: "nva@gmail.com", address: "abc" },
        { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "abc" },
        { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "abc" },
    ];

    // Tìm user theo id
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
        return <h2>Không tìm thấy người dùng!</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Thông tin chi tiết</h1>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    width: "300px",
                    textAlign: "left",
                    margin: "20px auto",
                }}
            >
                <h3>ID: {user.id}</h3>
                <p><strong>Tên:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Địa chỉ:</strong> {user.address}</p>
            </div>
        </div>
    );
};

export default UserDetail;
