import React from 'react';
import "../styles/Ourdoor.scss";

import ourdoor1 from "../images-Ourdoor/1_Brick_Default State.png";
import ourdoorHov1 from "../images-Ourdoor/1_Brick_Hover State.png";
import ourdoor2 from "../images-Ourdoor/2_Grey Marble_Default State.png";
import ourdoorHov2 from "../images-Ourdoor/2_Grey Marble_Hover State.png";
import ourdoor3 from "../images-Ourdoor/3_Breda_Default State.png";
import ourdoorHov3 from "../images-Ourdoor/3_Breda_Hover State.png";
import ourdoor4 from "../images-Ourdoor/4_Citrine_Default State.png";
import ourdoorHov4 from "../images-Ourdoor/4_Citrine_Hover State.png";

import ourdoor5 from "../images-Ourdoor/Outdoor Endura_1_Ellipse_CCC.png";
import ourdoor6 from "../images-Ourdoor/Outdoor Endura_2_Wave_CCC.png";
import ourdoor7 from "../images-Ourdoor/Outdoor Endura_3_Vanda_CCC.png";





function CollectionOurdoor() {
  return (
    <div className='Ourdoor'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>OUTDOOR ENDURA <br /> COLLECTION</h1>
              <p>
                Discover durability and style with the Outdoor Endura Collection—our high-quality carpets <br /> 
                designed for both indoor and outdoor spaces. Customizable in any design, size, and with a selection of 56 colors, <br /> 
                the Outdoor Endura Collection by Custom Creative Carpets, CCC Thailand <br /> 
                brings lasting comfort and a refined look to any indoor or alfresco setting.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>BRICK</h1>
            </div>
            <img className='imagdefaul' src={ourdoor1} alt="" />
            <img className='imaghover' src={ourdoorHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Brick</h1>
            <h4>Hand Woven</h4>
            <p>The Brick carpet combines strength and style, bringing a touch of rustic elegance to your outdoor spaces. Crafted with a hand-woven texture that echoes the rugged beauty of brickwork, this carpet is designed to withstand the elements, adding comfort and sophistication to patios, balconies, or sunrooms.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>GREY MARBLE</h1>
            </div>
            <img className='imagdefaul' src={ourdoor2} alt="" />
            <img className='imaghover' src={ourdoorHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Grey Marble</h1>
            <h4>Hand Woven</h4>
            <p>The Grey Marble carpet brings the refined elegance of natural stone to your outdoor oasis. Inspired by the timeless beauty of marble, this hand-woven piece features soft grey tones and subtle textures that echo the striations of stone, creating a serene, grounding effect. Designed for durability and crafted from premium acrylic with UV protection, the Grey Marble carpet resists the elements while maintaining its luxurious look.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>BREDA</h1>
            </div>
            <img className='imagdefaul' src={ourdoor3} alt="" />
            <img className='imaghover' src={ourdoorHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Breda</h1>
            <h4>Hand Woven</h4>
            <p>The Breda carpet brings warmth and coziness to your outdoor living space, with a hand-woven texture that feels as inviting as it looks. Inspired by natural woven patterns, Breda’s subtle design blends seamlessly with any outdoor decor, making it perfect for intimate evenings or lively gatherings. Whether placed on a patio, terrace, or deck, the Breda carpet enhances your space with its soft, earthy tones, adding a touch of relaxation to your outdoor retreat.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>CITRINE</h1>
            </div>
            <img className='imagdefaul' src={ourdoor4} alt="" />
            <img className='imaghover' src={ourdoorHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Citrine</h1>
            <h4>Hand Tufted</h4>
            <p>The Citrine carpet brings a refined, modern elegance to your space, with a soft, hand-tufted grid design that feels both structured and inviting. Inspired by the warm and grounding tones of natural citrine, this carpet combines neutral hues with clean lines, creating a look that’s timeless and versatile. Perfect for brightening up any indoor area, Citrine’s subtle texture and gentle colors make it a perfect complement to minimalist or natural-inspired decor.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={ourdoor5} alt="" />
          <img src={ourdoor6} alt="" />
          <img src={ourdoor7} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionOurdoor