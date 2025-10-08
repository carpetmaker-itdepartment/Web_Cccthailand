import React from 'react';
import "../styles/OurCollections.scss";
import { Link } from 'react-router-dom';

// images
import collect1 from "../images-collections/Collection1Defaul.png";
import collectHov from "../images-collections/Collection_1_HoverState.png";
import collect2 from "../images-collections/Collection_2_Default State.png";
import collectHov2 from "../images-collections/Collection_2_Hover State.png";
import collect3 from "../images-collections/Collection_3_Default State.png";
import collectHov3 from "../images-collections/Collection_3_Hover State.png";
import collect4 from "../images-collections/Collection_4_Default State.png";
import collectHov4 from "../images-collections/Collection_4_Hover State.png";
import collect5 from "../images-collections/Collection_5_Default State.png";
import collectHov5 from "../images-collections/Collection_5_Hover State.png";
import collect6 from "../images-collections/Collection_6_Default State.png";
import collectHov6 from "../images-collections/Collection_6_Hover State.png";
import collect7 from "../images-collections/Collection_7_Default State.png";
import collectHov7 from "../images-collections/Collection_7_Hover State.png";
import collect8 from "../images-collections/Collection_8_Default State.png";
import collectHov8 from "../images-collections/Collection_8_Hover State.png";
import collect9 from "../images-collections/Collection_9_Default State.png";
import collectHov9 from "../images-collections/Collection_9_Hover State.png";






function OurCollections() {
  return (
    <div className='collections'>
        <div className='containerCollect'>
            <section className='collectContents1'>
                <div>
                    <h1>At Custom Creative Carpets (CCC) Thailand,  <br />  our commitment to excellence is reflected in our wide range of carpet collections <br />  designed to suit every need. </h1>
                    <p>With nearly four decades of craftsmanship, we bring expertise and attention to every detail through our hand-made techniques. Whether it’s hand-tufted or hand-woven, we work with a variety of materials, ranging from natural options like wool, silk, cotton, linen, tencel, bamboo, and sisal, to innovative materials such as MONSILK™ upcycled yarn, Alfresco™ outdoor carpet, nylon, and K-Silk. All of this is crafted to bring your imagination to life.</p>
                </div>
            </section>
            <section className='collecContents2'>
                <div>
                    <div className='boxPic'>
                        <h1>OUR <br /> COLLECTIONS</h1>
                        <Link to="/ourcollections/cradiance">
                            <div className='box-images'>
                                <div className='boxText'>
                                    <p>Radiance Canyon <br /> Collection</p>
                                    <p>Unleash creativity with carpets <br /> inspired by nature's wonders.</p>
                                </div>
                                <img src={collect1} className='imagdefaul' alt="" />
                                <img src={collectHov} className='imaghover' alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to='/ourcollections/ethereally'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Ethereally Woven <br /> Collection</p>
                            <p>Delicate and meticulous <br /> workmanship in every thread</p>
                        </div>
                        <img src={collect2} className='imagdefaul' alt="" />
                        <img src={collectHov2} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to="/ourcollections/atelier">
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Atelier Mélange <br /> Collection</p>
                            <p>Bold textures, redefined  <br /> with W-Tufted innovation.</p>
                        </div>
                        <img src={collect3} className='imagdefaul' alt="" />
                        <img src={collectHov3} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/ocean'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Ocean Rewoven <br /> Collection</p>
                            <p>Sustainable style, <br /> inspired by the sea.</p>
                        </div>
                        <img src={collect4} className='imagdefaul' alt="" />
                        <img src={collectHov4} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/ourdoor'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Outdoor Endura <br /> Collection</p>
                            <p>Built for the outdoors, <br /> styled for extraordinary living.</p>
                        </div>
                        <img src={collect5} className='imagdefaul' alt="" />
                        <img src={collectHov5} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/versa'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>VersaStyle <br /> Collection</p>
                            <p>Reimagine your space with <br /> dynamic textures that inspire.</p>
                        </div>
                        <img src={collect6} className='imagdefaul' alt="" />
                        <img src={collectHov6} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/luxury'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Luxury Yacht <br /> Collection</p>
                            <p>Sail in style with <br /> premium elegance.</p>
                        </div>
                        <img src={collect7} className='imagdefaul' alt="" />
                        <img src={collectHov7} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/private'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Private Jet <br /> Collection</p>
                            <p>Fly above the clouds with <br /> floors that redefine luxury.</p>
                        </div>
                        <img src={collect8} className='imagdefaul' alt="" />
                        <img src={collectHov8} className='imaghover' alt="" />
                    </div>
                </Link>
                <Link to='/ourcollections/classic'>
                    <div className='box-imagesFullsize'>
                        <div className='boxText'>
                            <p>Classic <br /> Collection </p>
                            <p>Classic designs that <br /> never go out of style.</p>
                        </div>
                        <img src={collect9} className='imagdefaul' alt="" />
                        <img src={collectHov9} className='imaghover' alt="" />
                    </div>
                </Link>
            </section>
            <section className='collecContents3'>
                <div>
                    <h1>HAVE SOME FRESH <br /> IMAGINATION? <br /> LET’S CONTACT US <br /> TO MAKE IT REAL!</h1>
                    <p>Custom Creative Carpets, <br />  CCC Thailand</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default OurCollections