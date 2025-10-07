import React from 'react';
import "../styles/Alfresco.scss";

import alfresco1 from "../images-Alfresco/Alfresco_CCC_1.png";
import alfresco2 from "../images-Alfresco/Alfresco_CCC_2.png";
import alfresco3 from "../images-Alfresco/Alfresco_CCC_3.png";
import alfresco4 from "../images-Alfresco/Alfresco_CCC_Properties_Icon.png";




function InnoAlfresco() {
  return (
    <div className='innoAlfresco'>
        <section className='AlfrescoSec1'>
            <img src={alfresco1} alt="" />
            <div className="textAlfrescoSec1">
                <h1>ALFRESCO™ <br /> OUTDOOR <br /> CARPET</h1>
                <h4>Our Alfresco™  Collection offers <br /> high-quality indoor and outdoor carpets <br /> crafted from premium acrylic with UV <br /> protection. </h4>
                <p>This unique combination provides exceptional <br /> durability whether it’s wet, cold, or hot making our <br /> carpets resistant to extreme elements and abrasion.</p>
            </div>
        </section>
        <section className='AlfrescoSec2'>
            <div className="textAlfrescoSec2">
                <h1>56 COLORS <br /> READY FOR YOUR <br /> IMAGINATION</h1>
                <p>Customizable Designs: Available in any design and <br /> size, our Alfresco™ carpets offer versatility to suit <br /> any space. Choose from our selection of 56 colors to <br /> create a carpet that perfectly complements your <br /> environment.</p>
            </div>
            <img src={alfresco2} alt="" />
        </section>
        <section className='AlfrescoSec3'>
            <img src={alfresco3} alt="" />
            <div className="textAlfrescoSec3">
                <h1>OUTDOOR <br /> LIVING <br /> IS A NEW <br /> LUXURY</h1>
                <p>Even a small outdoor living space can <br /> add value to your home and improve <br /> your overall health</p>
            </div>
        </section>
        <section className='AlfrescoSec4'>
           <h1>ALFRESCO™ OUTDOOR <br /> CARPET PROPERTIES</h1>
           <img src={alfresco4} alt="" />
           <p>Discover the Alfresco™ Collection and elevate your indoor and outdoor spaces <br /> with carpets that are as durable as they are stylish.</p>
        </section>
    </div>
  )
}

export default InnoAlfresco