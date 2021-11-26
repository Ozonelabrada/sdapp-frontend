import React from 'react'
import './topNav.css'
import { Link } from "react-router-dom";
const TopNav = () => {
    return (
        <nav className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className="top-left">KITA</Link>
                <div className="top-right">
                    <Link to="/" className="tab">Home</Link>
                    <Link to="/about" className="tab">About</Link>
                    <Link to="/gallery" className="tab">Gallery</Link>
                    <div className="dropdown">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
