import React from 'react';
import "../styles/Monsilk.scss";
// images
import monsilkccc1 from "../images-Monsilk/Monsilk_CCC_1.png";
import monsilkccc2 from "../images-Monsilk/Monsilk_CCC_2.png";
import monsilkccc3 from "../images-Monsilk/Monsilk_CCC_3.png";
import monsilkccc4 from "../images-Monsilk/Monsilk_CCC_4.png";
import upcysing from "../images-Monsilk/Monsilk_CCC_Properties_Icon.png";
import properties from "../images-Monsilk/Monsilk_CCC_Certification.png";




function InnoMonsilk() {
  return (
    <div className='innoMonsilk'>
        <section className='monsilksec1'>
            <img src={monsilkccc1} alt="" />
            <div className="textmonsilkSec1">
                <h1>MONSILK™ <br /> UPCYCLING <br /> CARPET</h1>
                <h4>We recognized the urgency of environment <br /> problem and launched our MONSILK™ <br /> project to be a part of the solution.</h4>
                <p>MONSILK™ stands for Mind Our Nature & Soft as <br /> Silk, reflecting our commitment to environmental <br /> conservation and innovation.</p>
            </div>
        </section>
        <section className='monsilksec2'>
            <div className="textmonsilkSec2">
                <h1>Our MONSILK™ carpets are crafted using <br /> yarn derived from recycled plastic bottles <br /> collected from the ocean. </h1>
                <p>This not only helps reduce plastic waste but also <br /> transforms it into beautiful, functional products.</p>
            </div>
            <img src={monsilkccc2} alt="" />
        </section>
        <section className='monsilksec3'>
            <img src={monsilkccc3} alt="" />
            <div className="textmonsilkSec3">
                <h1>THE MORE <br /> CARPETS YOU USE, <br /> THE MORE YOU HELP <br /> THE PLANET.</h1>
                <p>Upcycled Masterpieces: <br /> Each MONSILK™ carpet is a work of art made from upcycled materials. <br /> The process involves converting discarded plastic bottles into high-quality <br /> yarn, demonstrating that waste can be turned into something valuable and <br /> aesthetically pleasing.</p>
                <p>Some of our carpet made from over 300 plastic bottles (600 ml each) per <br /> square meter! showcasing our dedication to reducing plastic pollution and <br /> promoting sustainability.</p>
            </div>
        </section>
        <section className='monsilksec4'>
            <div className="textmonsilkSec4">
                <h1>LATEST <br /> RELEASE</h1>
                <h4>MONSILK™ Outdoor Carpets,</h4>
                <p>MONSILK™ Outdoor Carpets, the ideal solution for both indoor and outdoor flooring needs. Crafted with advanced upcycling innovation, these carpets are designed to withstand harsh conditions while providing luxurious comfort.</p>
                <p>A standout feature of MONSILK™ Outdoor Carpets is the availability of custom colors, allowing you to personalize your space with endless design possibilities.</p>
            </div>
            <img src={monsilkccc4} alt="" />
        </section>
        <section className='monsilksec5'>
            <h1>MONSILK™ UPCYCLING <br /> CARPET PROPERTIES</h1>
            <img src={upcysing} alt="" />
            <p>Beautiful, durable, creative, and that’s not all <br /> We also work hard to achieve international certifications.</p>
        </section>
        <section className='monsilksec6'>
            <div className="containerSec6">
                <div className="textmonsilkSec6">
                    <h1>CERTIFIED <br /> BY WORLD-CLASS <br /> INSTITUTIONS</h1>
                    <p>MONSILK™ has been certified with Upcycling <br /> Circular Economy 2022 and verified by The <br /> Industrial Environment Institute of The Federation <br /> of Thai Industries, meeting the TGO Guidance of <br /> Carbon Footprint Standard.</p>
                </div>
                <img src={properties} alt="" />
            </div>
        </section>
    </div>
  )
}

export default InnoMonsilk