import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

// letakkan di index HTML untuk menampilkan Icon
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
// />

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to='/home'>Home</Link></li>
                    <li className="topListItem"><Link to='/about'>About</Link></li>
                    <li className="topListItem"><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
