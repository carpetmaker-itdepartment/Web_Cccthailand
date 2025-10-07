import React from 'react';
import "../styles/Ethereally.scss";

import ethereally1 from "../images-Etereally/1_Kanok_Default State.png";
import ethereallyHov1 from "../images-Etereally/1_Kanok_Hover State.png";
import ethereally2 from "../images-Etereally/2_Houndstooth_Default State.png";
import ethereallyHov2 from "../images-Etereally/2_Houndstooth_Hover State.png";
import ethereally3 from "../images-Etereally/3_Corn_Default State.png";
import ethereallyHov3 from "../images-Etereally/3_Corn_Hover State.png";
import ethereally4 from "../images-Etereally/4_Neo White_Default State.png";
import ethereallyHov4 from "../images-Etereally/4_Neo White_Hover State.png";

import ethereally5 from "../images-Etereally/Ethereally Woven_1_MysticKnot_CCC.png";
import ethereally6 from "../images-Etereally/Ethereally Woven_2_Baltra La Lune_CCC.png";
import ethereally7 from "../images-Etereally/Ethereally Woven_3_Black Tourmaline_CCC.png";


function CollectionEthereally() {
  return (
    <div className='ethereally'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>ETHEREALLY WOVEN <br /> COLLECTION </h1>
              <p>
                Each hand woven carpet creates an atmosphere rich in Thai tradition. <br /> 
                All are formed on a hand loom from selected patterns that present the Thai identity woven into the delicate beauty of <br /> 
                each design, melding innovative techniques to present a modern, internationally appealing look. Hand woven carpets <br /> 
                complement your furniture and provide a splendid addition to any space. <br /> 
                Install one of these gorgeous creations and your house is instantly more alluring.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>KANOK</h1>
            </div>
            <img className='imagdefaul' src={ethereally1} alt="" />
            <img className='imaghover' src={ethereallyHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Kanok </h1>
            <h4>Hand Woven</h4>
            <p>Inspired by the harmony of Thai tradition and modern minimalism, the Kanok carpet weaves together a timeless beauty in every stripe. Its soft, hand-woven texture is crafted with meticulous care, evoking a sense of warmth and tranquility. The subtle, alternating tones of black, white, and gray create a rhythmic pattern that adds depth and dimension to any space, effortlessly complementing contemporary interiors.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>HOUNDSTOOTH</h1>
            </div>
            <img className='imagdefaul' src={ethereally2} alt="" />
            <img className='imaghover' src={ethereallyHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Houndstooth</h1>
            <h4>Hand Woven</h4>
            <p>The Houndstooth carpet is a timeless nod to classic design with a modern twist. Handwoven with precision, its rich interplay of deep blue and earthy tones adds character to any room. The houndstooth pattern brings a sense of refined elegance, while the soft texture makes it as comfortable as it is stylish. Perfect for adding a touch of bold tradition to a contemporary setting.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>CORN</h1>
            </div>
            <img className='imagdefaul' src={ethereally3} alt="" />
            <img className='imaghover' src={ethereallyHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Corn</h1>
            <h4>Hand Woven</h4>
            <p>Corn carpet is a creation that combines the essence of Thai tradition with a refined, modern aesthetic. Crafted meticulously, this design draws inspiration from the natural hues of cornfields, blending warm yellows and earthy tones into a stunning pattern. With its rich texture and inviting aesthetic, Corn brings a natural beauty to any room, harmonizing with your furniture and creating an inviting, cozy atmosphere.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>NEO WHITE</h1>
            </div>
            <img className='imagdefaul' src={ethereally4} alt="" />
            <img className='imaghover' src={ethereallyHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Neo White</h1>
            <h4>Hand Woven</h4>
            <p>The Neo White Hand-Woven Carpet exudes simplicity and elegance, designed to bring a sense of calm and clarity to your space. Its pristine white tones with a subtle black border create a refined, minimalist look that pairs seamlessly with contemporary decor, allowing it to brighten up any room. The hand-woven texture adds depth and softness underfoot, making it as inviting as it is stylish. Ideal for living rooms, bedrooms, or any space in need of a clean, airy vibe, this carpet is a beautiful blend of modern design and timeless comfort.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={ethereally5} alt="" />
          <img src={ethereally6} alt="" />
          <img src={ethereally7} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionEthereally