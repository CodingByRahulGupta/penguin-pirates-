import React from "react";
import "./Header.css";

const Header=()=>{
    return(
        <header className="header">
            <div className="logo">ShopEase</div>
            <nav>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Abount</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="header-icons">
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-user"></i>
            </div>
        </header>
    );
};
export default Header;