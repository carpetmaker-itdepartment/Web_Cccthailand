import React from 'react';
import contact from "../images-contact/Contact Us_Image_CCC.png";
import "../styles/Contact.scss";

function Contact() {
  return (
    <div className='contact'>
          <h1>CUSTOM <br /> CREATIVE CARPETS, <br /> CCC THAILAND</h1>
          <h4 className='h4-1'>Environmentally responsible bespoke carpets <br /> with creative craftsmanship and innovation.</h4>
          <h4 className='h4-2'>Connect with Our Team</h4>
          <p className='p-1'>We eager to jump start a project with you whether it would be for creating high quality <br /> bespoke rugs from your imagination or finding carpet mill to produce your new collections.</p>
          <h4 className='h4-3'>T. +66 81 359 2006 <br /> info@cccthailand.com</h4>
          <h4>FACTORY</h4>
          <p>194 Moo 1, Jangsanit Road, Muang Phia, Ban Phai District, <br /> Khon Kaen 40110, Thailand</p>
          <img className='w-100' src={contact} alt="" />
    </div>
  )
}

export default Contact