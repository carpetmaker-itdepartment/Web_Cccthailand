import React from 'react'
import logo1 from "../assets/Logo_CCC.png";
import "../styles/Navbar2.scss";
import { Link, NavLink } from 'react-router-dom';

function Navbar2() {
  return (
    <nav className='navBar2'>
        <div className="containerNavbar">
            <ul className='menuList'>
                <li className='menuItem'>
                    <NavLink to="/ourstory" className='menuLink'>OUR STORY</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/ourinnovations" className='menuLink'>OUR INNOVATIONS</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/"  className='menuLink'>
                        <img src={logo1} alt="" />
                    </NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/ourcollections" className='menuLink'>OUR COLLECTIONS</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/contact" className='menuLink'>CONTACT US</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar2