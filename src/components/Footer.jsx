import React from 'react';
import "../styles/Footer.scss";
import { Link } from 'react-router-dom';

// images
import brand from "../assets/Logo_CCC_Thailand.png";

function Footer() {
  return (
    <div className='footer'>
        <footer className='containerFooter'>
            <div className="brand">
                <img src={brand} alt="" />
                <p>FOLLOW US</p>
                <div className="social">
                    <Link to="https://facebook.com/TheCarpetMaker/">
                        <div className="facebook">
                            <svg fill="white" width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443v1.581z"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to="https://www.instagram.com/thecarpetmaker/?hl=en">
                        <div className="instagram">
                            <svg fill="white" width="30px" height="30px" viewBox="0 0 19.2 19.2" data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <Link to="mailto:info@cccthailand.com"> 
                    <svg fill='white' width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
                        </g>
                    </svg> 
                     info@cccthailand.com
                </Link>
            </div>
            <div className="linkMenuFooter">
                <ul>
                    <li>
                        <Link to='/ourstory' className='titleLink'>OUR STORY</Link>
                    </li>
                    <li>
                        <div  className='secconLink text-decoration-none'>How we work</div>
                    </li>
                    <li>
                        <Link to='/ourinnovations' className='titleLink'>OUR INNOVATIONS</Link>
                    </li>
                    <li>
                        <Link to='/ourinnovations/monsilk' className='secconLink'>MONSILK™ Upcycling Carpet</Link>
                    </li>
                    <li>
                        <Link to='/ourinnovations/alfresco' className='secconLink'>Alfresco™ Outdoor Carpet</Link>
                    </li>
                    <li>
                        <Link to='/ourinnovations/qvira' className='secconLink'>QVIRA Antimicrobial Carpet</Link>
                    </li>
                </ul>
            </div>
            <div className="colectionFooter">
                <ul>
                    <li><Link to='/ourcollections'>OUR COLLECTIONS</Link></li>
                    <li>Radiance Canyon Collection</li>
                    <li>Ethereally Woven Collection</li>
                    <li>Atelier Mélange Collection (W-Tuft)</li>
                    <li>Ocean Rewoven Collection</li>
                    <li>Outdoor Endura Collection</li>
                    <li>VersaStyle Collection</li>
                    <li>Luxury Yacht Collection</li>
                    <li>Private Jet Collection</li>
                    <li>Classic Collection</li>
                </ul>
            </div>
            <div className="custommerThailand">
                <p>© 2024, Custom Creative Carpets, CCC Thailand</p>
                <p className='textPhone'>+66 81 359 2006 <br /> Factory</p>
                <span>194 Moo 1, Jangsanit Road, Muang Phia, <br /> Ban Phai District, Khon Kaen 40110, Thailand</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer