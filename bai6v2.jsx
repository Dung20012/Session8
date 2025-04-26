import { useNavigate } from "react-router-dom";

const ListUser = () => {
    const navigate = useNavigate();

    const users = [
        { id: 1, name: "Nguyễn Văn A  ", email: "nva@gmail.com", address: "abc" },
        { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "abc" },
        { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "abc" },
    ];

    const handleDetail = (id) => {
        navigate(`/user/${id}`);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
            {users.map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        width: "30%",
                        textAlign: "left",
                    }}
                >
                    <h3>ID: {user.id}</h3>
                    <p><strong>Tên:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Địa chỉ:</strong> {user.address}</p>
                    <button onClick={() => handleDetail(user.id)}>Xem chi tiết</button>  // click vô xem chi tiết dẫn tới userdetail
                </div>
            ))}
        </div>
    );
};

export default ListUser;
