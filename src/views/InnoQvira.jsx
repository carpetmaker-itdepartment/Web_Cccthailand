import React from 'react';
import "../styles/Qvira.scss";

// images
import qvira1 from "../images-Qvira/Qvira_CCC_1.png";
import qvira2 from "../images-Qvira/Qvira_CCC_2.png";
import qvira3 from "../images-Qvira/Qvira_CCC_Properties_Icon.png";

import iso from "../images-Qvira/Nelson_MSL_SGS_Certification_Sheet.png";
import iso2 from "../images-Qvira/SGS_Antifungal_Certification_Sheet.png";
import iso3 from "../images-Qvira/THTI_150washes_Certification_Sheet.png";
import iso4 from "../images-Qvira/Non Toxic_Certification_Sheet.png";







function InnoQvira() {
  return (
    <div className='qvira'>
        <section className='qviraSec1'>
            <img src={qvira1} alt="" />
            <div className="textQviraSec1">
                <h1>QVIRA <br /> ANTIMICROBIAL <br /> CARPET</h1>
                <h4>Smart protection with <br /> Zinc Ion Technology</h4>
                <p>QVIRA inhibits up to 99% of coronaviruses. This <br /> smart yarn contains positive ions that disrupt the <br /> virus’s protein spikes, rendering them inactive and <br /> preventing replication. Not only is it effective against <br /> various coronavirus variants, but QVIRA also targets <br /> bacteria, fungi, and odors, making it a versatile and <br /> essential addition to any space.</p>
            </div>
        </section>
        <section className='qviraSec2'>
            <div className="textQviraSec2">
                <h1>DURABLE <br /> INTEGRATION</h1>
                <p>Unlike other antiviral technologies that rely on <br /> chemical coatings, QVIRA blends its active <br /> ingredients into the fiber itself. This ensures that the <br /> yarn remains effective even after 150 washes, <br /> outlasting many chemically coated products.</p>
            </div>
            <img src={qvira2} alt="" />
        </section>
        <section className='qviraSec3'>
            <h1>QVIRA Properties <br /> & Certifications</h1>
            <img src={qvira3} alt="" />
        </section>
        <section className='qviraSec4'>
            <div className='itemQviraSec4'>
                <img src={iso} alt="" />
                <div className='qviraTextsec4'>
                    <h1>ISO 18184 Certification</h1>
                    <p>QVIRA’s antiviral activity has been rigorously tested and certified by NELSON LABS USA, MSL UK and SGS Hong Kong demonstrating up to 99.37% effectiveness against Human Coronavirus.</p>
                </div>
            </div>
            <div className='itemQviraSec4'>
                <img src={iso2} alt="" />
                <div className='qviraTextsec4'>
                    <h1>SGS Anti-Fungal Certification</h1>
                    <p>QVIRA achieved a Grade 0 (No Growth) for various fungi, including Aspergillus brasiliensis and Penicillium funiculosum.</p>
                </div>
            </div>
            <div className='itemQviraSec4'>
                <img src={iso3} alt="" />
                <div className='qviraTextsec4'>
                    <h1>Effective after 150 washes</h1>
                    <p>99.9% bacteria inhibition, effective after 150 washes. Certified by THTI (Thailand Textile Institute)</p>
                </div>
            </div>
            <div className='itemQviraSec4'>
                <img src={iso4} alt="" />
                <div className='qviraTextsec4-1'>
                    <div>
                        <h1>OEKO-TEX® Standard 100</h1>
                        <p>Certified as non-toxic and safe, QVIRA meets the stringent safety standards of the OEKO-TEX® association, ensuring it poses no harm to babies and toddlers.</p>
                    </div>
                    <div>
                        <h1>REACH SVHC Certified</h1>
                        <p>Registration, Evaluation and Authorization of Chemical Substances, provides assurance that a product has been reviewed by a third party and offers traceability of compliance.</p>
                    </div>
                    <div>
                        <h1>Fully compliance with BPR legislation</h1>
                        <p>The Biocidal Products Regulation introduces harmonized rules for authorization of active substances and biocidal products on the EU/EEA market.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='textInnoQvira'>
            <p>Live a balanced life between well-being and aesthetics. <br /> Contact us for more information.</p>
        </div>
    </div>
  )
}

export default InnoQvira