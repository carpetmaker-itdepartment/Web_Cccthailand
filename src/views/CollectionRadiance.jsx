import React from 'react';
import "../styles/Radiance.scss";
// images
import radian1 from "../images-CollectRadiance/1_Helconia_Default State.png"
import radianHov1 from "../images-CollectRadiance/1_Helconia_Hover State.png"
import radian2 from "../images-CollectRadiance/2_Aurora Terrain_Default State.png"
import radianHov2 from "../images-CollectRadiance/2_Aurora Terrain_Hover State.png"
import radian3 from "../images-CollectRadiance/3_Presley_Default State.png"
import radianHov3 from "../images-CollectRadiance/3_Presley_Hover State.png"
import radian4 from "../images-CollectRadiance/4_Flowers_Default State.png"
import radianHov4 from "../images-CollectRadiance/4_Flowers_Hover State.png"
import g1 from "../images-CollectRadiance/Radiance Canyon_1_Tornado_CCC.png"
import g2 from "../images-CollectRadiance/Radiance Canyon_2_Galaxy_CCC.png"
import g3 from "../images-CollectRadiance/Radiance Canyon_3_Abstract Idea 9_CCC.png"



function CollectionRadiance() {
  return (
    <div className='collectionRadiance'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>RADIANCE CANYON <br /> COLLECTION</h1>
              <p>Walk around and feel these sturdy carpets suffused with lavish details. <br />
                  Designs and patterns are handcrafted and derived from a tradition <br />
                  of expertise and skilled craftsmanship. <br />
                  Every curve and line showcases our careful techniques. <br />
                  This is our trademark: delicate, three-dimensional carving.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>HELCONIA</h1>
            </div>
            <img className='imagdefaul' src={radian1} alt="" />
            <img className='imaghover' src={radianHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Helconia</h1>
            <h4>Hand Tufted, Carving</h4>
            <p>The Helconia carpet brings warmth and elegance into any space. Its hand-tufted design features soft, earthy tones and gentle, flowing lines that feel both calming and luxurious. With each touch, you’ll feel the depth and texture of its three-dimensional carving—a subtle yet striking detail that adds personality to your room. It’s a crafted piece of art that invites you to experience comfort and style in a whole new way.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>AURORA TERRAIN</h1>
            </div>
            <img className='imagdefaul' src={radian2} alt="" />
            <img className='imaghover' src={radianHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Aurora Terrain</h1>
            <h4>Hand Tufted</h4>
            <p>The Aurora Terrain carpet brings the beauty of nature indoors, capturing the warmth of earth tones and the movement of rocky landscapes. Soft amber, deep charcoal, and cool slate colors flow together, creating a pattern that feels both organic and artistic. Hand-tufted with care, each curve and line tells a story of raw, natural beauty, grounding your space while adding a touch of bold character. Perfect for anyone who loves the warmth and texture of nature.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>PRESLEY</h1>
            </div>
            <img className='imagdefaul' src={radian3} alt="" />
            <img className='imaghover' src={radianHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Presley</h1>
            <h4>Hand Tufted, Carving</h4>
            <p>The Presley carpet brings a sense of timeless charm and warmth to your space. Its hand-tufted, carved details showcase delicate floral patterns and flowing curves, all in rich, earthy tones highlighted by bold black accents. Every inch of this carpet feels thoughtfully crafted, with textures that invite you to reach out and feel the artistry. Presley brings a cozy elegance to any room, blending classic beauty with a modern edge.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>FLOWERS</h1>
            </div>
            <img className='imagdefaul' src={radian4} alt="" />
            <img className='imaghover' src={radianHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Flowers</h1>
            <h4>Hand Tufted, Carving</h4>
            <p>The Flowers carpet is like a garden you can walk through, right in your home. Its rich, hand-tufted design brings each petal and leaf to life, popping against the deep black background with vibrant reds, greens, and soft golden tones. There’s a warmth and joy in this piece, as if you’re bringing a bouquet of fresh blooms indoors. Every detail is crafted to make you feel like you’re surrounded by nature’s beauty, adding a cheerful, lively touch to your space.</p>
          </div>
        </section>
        <section className='sections-3'>
          <div className='gridSec3'>
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
          </div>
        </section>
        <div className='footerRadian'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionRadiance