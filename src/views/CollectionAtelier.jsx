import React from 'react';
import "../styles/Atelier.scss";

// images
import atelier1 from "../images-Atelier/1_Atrani_Default State.png";
import atelierHov1 from "../images-Atelier/1_Atrani_Hover State.png";
import atelier2 from "../images-Atelier/2_The Valencia_Default State.png";
import atelierHov2 from "../images-Atelier/2_The Valencia_Hover State.png";
import atelier3 from "../images-Atelier/3_Lipari_Default State.png";
import atelierHov3 from "../images-Atelier/3_Lipari_Hover State.png";
import atelier4 from "../images-Atelier/4_Spider_Default State.png";
import atelierHov4 from "../images-Atelier/4_Spider_Hover State.png";
import atelier5 from "../images-Atelier/Atelier Mélange_W-Tuft Base_CCC.png";
import atelier6 from "../images-Atelier/Atelier Mélange_1_W-Tufted_Yellow_CCC.png";
import atelier7 from "../images-Atelier/Atelier Mélange_2_Winter Rose_CCC.png";
import atelier8 from "../images-Atelier/Atelier Mélange_3_Bally_CCC.png";



function CollectionAtelier() {
  return (
    <div className='atelier'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>ATELIER MÉLANGE <br /> COLLECTION</h1>
              <p>
                With our exclusive technique, each carpet begins with a beautifully handwoven base, transformed into a <br /> 
                stunning piece through hand-tufted designs that add texture and character to every inch. We allow clients <br /> 
                freedom to choose from a variety of handwoven bases that reflect their style, creating a unique foundation <br /> 
                enhanced with handcrafted designs and patterns. Every W-Tuft carpet is a true original, blending modern <br /> 
                elegance with the warmth of delicate craftsmanship.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>ATRANI</h1>
            </div>
            <img className='imagdefaul' src={atelier1} alt="" />
            <img className='imaghover' src={atelierHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Atrani </h1>
            <h4>W-Tufted</h4>
            <p>The Atrani carpet in our W-Tufted Collection is designed to evoke the quiet elegance of natural landscapes, bringing a sense of calmness to any space. With a handwoven base that provides a rich, textured foundation, each tufted detail adds a subtle movement, like the gentle waves of a peaceful coastline or the soft shadows in a lush forest. The deep, earthy tones and organic pattern work together to create a grounding atmosphere, perfect for cozy retreats or modern, open spaces.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>THE VALENCIA</h1>
            </div>
            <img className='imagdefaul' src={atelier2} alt="" />
            <img className='imaghover' src={atelierHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>The Valencia</h1>
            <h4>W-Tufted</h4>
            <p>The Valencia carpet in our W-Tufted Collection brings a touch of refined elegance to any room, echoing the classic European decor with a modern twist. With a handwoven base in soft, natural tones, this piece exudes warmth and light, making it the perfect foundation for bright, airy spaces. Delicately hand-tufted patterns create a subtle lattice design that adds depth and texture without overwhelming the senses, striking the perfect balance between intricate detailing and minimalist charm.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>LIPARI</h1>
            </div>
            <img className='imagdefaul' src={atelier3} alt="" />
            <img className='imaghover' src={atelierHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Lipari</h1>
            <h4>W-Tufted</h4>
            <p>The Lipari carpet, inspired by the gentle rhythm of ocean waves meeting the shore. This handwoven base is enriched with a flowing, hand-tufted pattern that echoes nature's soft, undulating forms. The muted tones and graceful lines create a harmonious balance, perfectly suited for sophisticated interiors that embrace calm and refinement. Ideal for a luxurious lounge or a serene sitting room.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>SPIDER</h1>
            </div>
            <img className='imagdefaul' src={atelier4} alt="" />
            <img className='imaghover' src={atelierHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Spider</h1>
            <h4>W-Tufted</h4>
            <p>The Spider carpet, drawing inspiration from the geometry of spider webs and the allure of midnight shadows. Crafted with a richly handwoven base, this piece features a striking hand-tufted pattern of interlocking shapes that capture light and depth, creating an almost hypnotic effect. Perfect for those who appreciate modern design with an edge, the Spider carpet adds a layer of mystery and drama to any room, grounding it with a sense of refined elegance.</p>
          </div>
        </section>

        <section className='sections-3'>
          <img src={atelier5} alt="" />
          <div className='textsec3'>
            <h1>OUR HAND-WOVEN <br /> CREATION IS READY <br /> TO INSPIRE YOUR <br /> IMAGINATION.</h1>
            <p>Whether you’re setting the mood for a fresh new space or adding a special touch to your existing decor, the W-Tuft Collection delivers a truly unique piece that brings depth, personality, and a little bit of magic to your home.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={atelier6} alt="" />
          <img src={atelier7} alt="" />
          <img src={atelier8} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionAtelier