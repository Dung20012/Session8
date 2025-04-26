import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Product() {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    };

    return (
        <div>
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
        </div>
    )
}
