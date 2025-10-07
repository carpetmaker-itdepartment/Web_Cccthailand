import React from 'react';
import "../styles/Luxury.scss";

import luxury1 from "../images-Luxury/1_Hakvoort_CCC_1.png";
import luxury2 from "../images-Luxury/1_Hakvoort_CCC_2.png";
import luxury3 from "../images-Luxury/1_Hakvoort_CCC_3.png";
import luxury4 from "../images-Luxury/2_Lady Lara_CCC_1.png";
import luxury5 from "../images-Luxury/2_Lady Lara_CCC_2.png";
import luxury6 from "../images-Luxury/2_Lady Lara_CCC_3.png";
import luxury7 from "../images-Luxury/3_Talisman Maiton_CCC_1.png";
import luxury8 from "../images-Luxury/3_Talisman Maiton_CCC_2.png";
import luxury9 from "../images-Luxury/3_Talisman Maiton_CCC_3.png";
import luxury10 from "../images-Luxury/Luxury Yacht_1_Flowers_CCC.png";
import luxury11 from "../images-Luxury/Luxury Yacht_2_W-Tuft_CCC.png";
import luxury12 from "../images-Luxury/Luxury Yacht_3_Totti_CCC.png";
import luxury13 from "../images-Luxury/Luxury Yacht_4_Woolen_Silk_CCC.png";
import luxury14 from "../images-Luxury/Luxury Yacht_5_Water_CCC.png";
import luxury15 from "../images-Luxury/Luxury Yacht_6_Carving_CCC.png";




function CollectionLuxury() {
  return (
    <div className='luxury'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>LUXURY YACHT <br /> COLLECTION</h1>
              <p>
                With expertise in crafting exquisite carpets from high-quality materials, <br /> 
                we can tailor luxurious carpets for your yacht. <br /> 
                Our yacht carpets boast beautiful and elegant designs, produced and installed <br /> 
                to the highest standards. They are another essential element <br /> 
                to help create a warm atmosphere and bring you beyond luxury.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
            <div className='textsections-2'>
                <h1>HAKVOORT’S <br /> TRAILBLAZING <br /> YACHT</h1>
                <p>Photo Credit : Willard Yacht Carpet</p>
            </div>
            <img src={luxury1} alt="" />
        </section>
        <section className='sections-3'>
            <div className="sec3images">
                <img src={luxury2} alt="" />
                <img src={luxury3} alt="" />
            </div>
            <p>The Hakvoort Shipyard carpet captures the essence of coastal elegance, bringing the tranquility of ocean waves and sea breezes into your yacht interior. Hand <br /> 
                -tufted with precision and intricately carved, this luxurious carpet features a flowing, organic pattern reminiscent of sunlit waves or wind-swept sands. Its soft, <br /> 
                layered tones add depth and warmth, enhancing the ambiance of your cabin and creating a cozy yet sophisticated atmosphere. Crafted with the finest materials to <br /> 
                ensure resilience in marine environments, Hakvoort Shipyard is designed not only for beauty but also for durability.
            </p>
            <hr />
        </section>
        <section className='sections-2'>
            <div className='textsections-2'>
                <h1>LADY <br /> LARA <br /> YACHT</h1>
                <h4>Where simplicity <br /> meets luxury.</h4>
            </div>
            <img src={luxury4} alt="" />
        </section>
        <section className='sections-3'>
            <div className="sec3images">
                <img src={luxury5} alt="" />
                <img src={luxury6} alt="" />
            </div>
            <p>
                The Lady Lara Yacht carpet transforms your yacht interior into a sanctuary of serene elegance. Hand-tufted to perfection, this luxurious carpet features a soft, <br /> 
                creamy texture that echoes the gentle shimmer of sandy shores and warm sunlight. Its plush feel invites you to sink into comfort, while the subtle sheen of the fibers <br /> 
                captures the light beautifully, enhancing the spaciousness and tranquility of the cabin.
            </p>
            <hr />
        </section>
        <section className='sections-2'>
            <div className='textsections-2'>
                <h1>TALISMAN <br /> MAITON <br /> YACHT</h1>
                <h4>Elegance refined <br /> with luxury</h4>
            </div>
            <img src={luxury7} alt="" />
        </section>
        <section className='sections-3'>
            <div className="sec3images">
                <img src={luxury8} alt="" />
                <img src={luxury9} alt="" />
            </div>
            <p>
                Crafted entirely by hand, the Talisman Maiton embodies understated elegance. Its soft, solid tones are complemented by refined patterns, delivering a timelessly <br /> 
                sophisticated aesthetic that elevates any yacht interior. Perfectly balancing luxury and simplicity, this masterpiece is a testament to artisanal craftsmanship.
            </p>
            <hr />
        </section>
        <section className='sections-4'>
          <img src={luxury10} alt="" />
          <img src={luxury11} alt="" />
          <img src={luxury12} alt="" />
          <img src={luxury13} alt="" />
          <img src={luxury14} alt="" />
          <img src={luxury15} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionLuxury