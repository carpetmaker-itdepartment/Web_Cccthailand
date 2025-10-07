import React from 'react';
import "../styles/Classic.scss";

import classic1 from "../images-classic/1_Thai Ka-Nok_Default State.png";
import classicHov1 from "../images-classic/1_Thai Ka-Nok_Hover State.png";
import classic2 from "../images-classic/2_Classic Charisma_Default State.png";
import classicHov2 from "../images-classic/2_Classic Charisma_Hover State.png";
import classic3 from "../images-classic/3_Tranquil Tangle_Default State.png";
import classicHov3 from "../images-classic/3_Tranquil Tangle_Hover State.png";
import classic4 from "../images-classic/Classic_1_Red Carving_CCC.png";
import classic5 from "../images-classic/Classic_2_Circle Carving_CCC.png";
import classic6 from "../images-classic/Classic_3_Plain Carving_CCC.png";



function CollectionClassic() {
  return (
    <div className='classic'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>CLASSIC <br /> COLLECTION</h1>
              <p>
                Discover timeless elegance with our Classic Carpet Collection, <br /> 
                crafted for both durability and sophistication. <br /> 
                Each design blends traditional aesthetics with modern performance, <br /> 
                offering a rich, luxurious feel underfoot. <br /> 
                Elevate any space with the enduring charm of classic style.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>THAI KA-NOK</h1>
            </div>
            <img className='imagdefaul' src={classic1} alt="" />
            <img className='imaghover' src={classicHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Thai Ka-nok</h1>
            <h4>Hand Tufted</h4>
            <p>The Thai Ka-nok Elegance carpet captures the timeless beauty of Thai artistry, with intricate floral and vine patterns that bring a touch of heritage into any space. Hand-tufted to perfection, each detail echoes the grace of traditional Thai motifs, blending effortlessly with classic or vintage interiors. The soft, muted colors lend a gentle warmth, creating an inviting atmosphere that exudes both charm and refinement.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>CLASSIC CHARISMA</h1>
            </div>
            <img className='imagdefaul' src={classic2} alt="" />
            <img className='imaghover' src={classicHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Classic Charisma</h1>
            <h4>Hand Tufted</h4>
            <p>The Classic Charisma carpet embodies the charm and grace of a bygone era, blending rich details with a timeless design. Intricately hand-tufted, this piece showcases an elegant floral motif that flows across the surface, complemented by soft, earthy tones that add warmth to any room. Ideal for traditional settings, its plush texture invites comfort, while its detailed artistry adds a touch of grandeur.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>TRANQUIL TANGLE</h1>
            </div>
            <img className='imagdefaul' src={classic3} alt="" />
            <img className='imaghover' src={classicHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Tranquil Tangle</h1>
            <h4>Hand Tufted</h4>
            <p>The Tranquil Tangle carpet weaves a serene narrative with its intricate design and delicate color palette. Soft blues, warm golds, and gentle cream tones intertwine in a refined, timeless pattern reminiscent of classical elegance. Each floral detail and geometric framework invites calm and harmony into the room, creating a space that feels both stately and comforting. Ideal for grounding a living area or a quiet reading nook.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={classic4} alt="" />
          <img src={classic5} alt="" />
          <img src={classic6} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionClassic