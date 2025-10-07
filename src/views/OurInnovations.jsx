import React, { useEffect, useState } from 'react';
import "../styles/OurInnovations.scss";
import monsilk1 from "../images-innovations/Image_Default State_Monsilk.png";
import logoMonsilk from "../images-innovations/Logo_Monsilk.png";
import alfresco from "../images-innovations/Image_Default State_Alfresco.png";
import logoAlfresco from "../images-innovations/Logo_Alfresco.png";
import qvira from "../images-innovations/Image_Default State_Qvira.png";
import logoQvira from "../images-innovations/Logo_Qvira.png";
import { Link } from 'react-router-dom';

function OurInnovations() {



  return (
    <div className='innovations'>
        <div className="containerInno">
            <section className='innoContents1'>
                <div>
                    <h1>WITH A REPUTATION AS THE MOST RELIABLE <br /> HIGH-END BESPOKE CARPET MANUFACTURER. </h1>
                    <p> For nearly four decades of experience, we’re also at the forefront of carpet innovation, <br /> constantly pushing the boundaries of what’s possible.</p>
                </div>
            </section>
            <section className='innoContents2'>
                <Link to="/ourinnovations/monsilk">
                    <div className='logoBan'>
                        <img className='bgIm' src={monsilk1} alt="" />
                        <img className='logoInno' src={logoMonsilk} alt="" />
                    </div>
                    <h1>MONSILK™</h1>
                    <p>A better Carpet <br /> for a better planet</p>
                </Link>
                <Link to="/ourinnovations/alfresco">
                    <div className='logoBan'>
                        <img className='bgIm' src={alfresco} alt="" />
                        <img className='logoInno' src={logoAlfresco} alt="" />
                    </div>
                    <h1>ALFRESCO™</h1>
                    <p>Ourdoor living <br /> is a new luxury</p>
                </Link>
                <Link to="/ourinnovations/qvira">
                    <div className='logoBan'>
                        <img className='bgIm' src={qvira} alt="" />
                        <img className='logoInno' src={logoQvira} alt="" />
                    </div>
                    <h1>QVIRA</h1>
                    <p>Antimicrobial carpet <br /> for wellbeing</p>
                </Link>
            </section>
        </div>
    </div>
  )
}

export default OurInnovations