import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// styles
import "../styles/Navbar.scss";
// images
import logo from "../assets/Logo_CCC_Thailand.png";
import logo1 from "../assets/Logo_CCC.png";




function Navbar() {

    const [navBg, setNavBg] = useState("transparent");
    const [colorLink, setColorLink] = useState("white");
    const [logoBlock, setLogoBlock] = useState("block");
    const [logoNone, setLogoNone] = useState("none");


    const listenScrollY = ()=> {
        window.scrollY > 1 ? setNavBg("white") : setNavBg("transparent");
        window.scrollY > 1 ? setColorLink("black") : setColorLink("white");
        window.scrollY > 1 ? setLogoBlock("none") : setLogoBlock("block");
        window.scrollY > 1 ? setLogoNone("block") : setLogoNone("none");       
    };
    useEffect(()=> {
        window.addEventListener("scroll", listenScrollY);
        return () => {
            window.removeEventListener("scroll", listenScrollY);
        }
    }, []);


  return (
    <nav className='navBar' style={{
        backgroundColor: navBg,
        transition: "all 0.3s"
    }}>
        <div className="containerNavbar">
            <ul className='menuList'>
                <li className='menuItem'>
                    <NavLink to="/ourstory" className='menuLink' style={{color:colorLink}}>OUR STORY</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/ourinnovations" className='menuLink' style={{color:colorLink}}>OUR INNOVATIONS</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/" className='menuLink'>
                        <img style={{display: logoBlock}} src={logo} alt="" />
                        <img style={{display: logoNone}} src={logo1} alt="" />
                    </NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/ourcollections" className='menuLink' style={{color:colorLink}}>OUR COLLECTIONS</NavLink>
                </li>
                <li className='menuItem'>
                    <NavLink to="/contact" className='menuLink' style={{color:colorLink}}>CONTACT US</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar