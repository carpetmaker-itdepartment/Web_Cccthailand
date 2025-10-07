import React from 'react';
import "../styles/Ocean.scss";

import ocean1 from "../images-Ocean/1_Before Sunset_Default State.png";
import oceanHov1 from "../images-Ocean/1_Before Sunset_Hover State.png";
import ocean2 from "../images-Ocean/2_Earth-White Marble_Default State.png";
import oceanHov2 from "../images-Ocean/2_Earth-White Marble_Hover State.png";
import ocean3 from "../images-Ocean/3_Stoneleaf_Default State.png";
import oceanHov3 from "../images-Ocean/3_Stoneleaf_Hover State.png";
import ocean4 from "../images-Ocean/4_Rafina_Default State.png";
import oceanHov4 from "../images-Ocean/4_Rafina_Hover State.png";

import ocean5 from "../images-Ocean/Ocean Rewoven_1_Aquatic Green_CCC.png";
import ocean6 from "../images-Ocean/Ocean Rewoven_2_Matrix-Mist_CCC.png";
import ocean7 from "../images-Ocean/Ocean Rewoven_3_Sky_CCC.png";



function CollectionOcean() {
  return (
    <div className='ocean'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>OCEAN REWOVEN <br /> COLLECTION</h1>
              <p>
                At Custom Creative Carpets, CCC Thailand, we create premium polyester yarn, which is then woven into each unique <br /> 
                piece in this collection. With a vision of a cleaner, more beautiful planet, our team combines innovation and skilled <br /> 
                craftsmanship to make a difference. The Ocean Rewoven Collection brings not only style and elegance into your home <br /> 
                but also a statement of care for the environment—each carpet is a step towards a sustainable future.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>BEFORE SUNSET</h1>
            </div>
            <img className='imagdefaul' src={ocean1} alt="" />
            <img className='imaghover' src={oceanHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Before Sunset</h1>
            <h4>Hand Tufted</h4>
            <p>Inspired by the serene beauty of twilight, Before Sunset captures the shifting colors of the sky as day turns to dusk. Crafted from a premium upcycled yarn, this luxurious carpet reflects nature’s palette of deep blues, soft grays, and subtle metallic tones. Its complex design mimics the reflective play of light on water, bringing the calming essence of sunset indoors.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>EARTH, WHITE MARBLE</h1>
            </div>
            <img className='imagdefaul' src={ocean2} alt="" />
            <img className='imaghover' src={oceanHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Earth, White Marble</h1>
            <h4>Hand Tufted</h4>
            <p>The Earth, White Marble carpet captures the raw nature’s beauty and our commitment to sustainability. This hand-tufted masterpiece captures the beauty of marble’s patterns while honoring the earth. Swirling earth tones in browns, creams, and whites mimic the intricate layers of natural stone, creating a soothing, grounding effect. With each piece crafted from recycled polyester yarn, this carpet transforms waste into art, adding both luxury and purpose to your space.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>STONELEAF</h1>
            </div>
            <img className='imagdefaul' src={ocean3} alt="" />
            <img className='imaghover' src={oceanHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Stoneleaf</h1>
            <h4>Hand Tufted</h4>
            <p>Inspired by nature’s organic beauty, this hand-tufted carpet brings a modern yet earthy touch to any space. Its unique pattern resembles delicate stone or tree bark, creating a subtle interplay of shadows and light that changes with every angle. With soft, muted tones that blend effortlessly into contemporary or minimalist decor, this carpet serves as a grounding element, adding warmth, depth, and a touch of nature’s artistry to your living space.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>RAFINA</h1>
            </div>
            <img className='imagdefaul' src={ocean4} alt="" />
            <img className='imaghover' src={oceanHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Rafina</h1>
            <h4>Hand Woven</h4>
            <p>The Rafina carpet is like a soft tapestry of tiny stories, each square carefully woven to create a warm, inviting mosaic. Inspired by traditional weaving techniques, this intricate pattern adds texture and dimension, with each square telling its own story within the larger composition. It’s the perfect complement to minimalist and earthy interiors.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={ocean5} alt="" />
          <img src={ocean6} alt="" />
          <img src={ocean7} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionOcean