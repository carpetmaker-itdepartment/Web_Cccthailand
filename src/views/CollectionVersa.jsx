import React from 'react';
import "../styles/Versa.scss";

import versa1 from "../images-versa/1_Luna_Default State.png";
import versaHov1 from "../images-versa/1_Luna_Hover State.png";
import versa2 from "../images-versa/2_Black Velvet_Default State.png";
import versaHov2 from "../images-versa/2_Black Velvet_Hover State.png";
import versa3 from "../images-versa/3_Silk Serenity_Default State.png";
import versaHov3 from "../images-versa/3_Silk Serenity_Hover State.png";
import versa4 from "../images-versa/VersaStyle_Standard_Wall to wall_CCC.png";




function CollectionVersa() {
  return (
    <div className='versa'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>VERSASTYLE <br /> COLLECTION</h1>
              <p>
                The VersaStyle Collection offers a curated selection of designs that suit a range of aesthetic preferences. Each <br /> 
                piece in this collection is meticulously crafted to withstand high-traffic areas, providing both visual appeal and <br /> 
                lasting comfort underfoot. With a choice of cut pile and loop pile textures, VersaStyle blends flexibility and style <br /> 
                to adapt seamlessly to diverse interiors. If you’re looking for something uniquely yours, we’re delighted to <br /> 
                collaborate on custom designs tailored to your specific vision, ensuring your space reflects your individuality.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>LUNA</h1>
            </div>
            <img className='imagdefaul' src={versa1} alt="" />
            <img className='imaghover' src={versaHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>Luna</h1>
            <h4>Hand Woven</h4>
            <p>The Luna carpet captures the serene, grounding beauty of natural textures, designed to bring warmth and subtle elegance to any room. Hand-woven with meticulous craftsmanship, Luna’s soft, earthy tones and intricate weave pattern evoke the quiet beauty of moonlit landscapes and softly illuminated spaces. This carpet serves as the perfect foundation for creating a tranquil, welcoming atmosphere, whether in a cozy living room or a minimalist-inspired space.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>BLACK VELVET</h1>
            </div>
            <img className='imagdefaul' src={versa2} alt="" />
            <img className='imaghover' src={versaHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Black Velvet</h1>
            <h4>Hand Tufted</h4>
            <p>The Black Velvet carpet is thoughtfully crafted to handle the hustle and bustle of everyday life, combining elegance with resilience. Its rich, dark tones and refined texture add depth and luxury to any room, grounding the space with a touch of quiet confidence. The dense, plush pile invites you to sink your feet in, while its structured, minimalist look perfectly complements clean-lined furniture and modern decor.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>PRESLEY</h1>
            </div>
            <img className='imagdefaul' src={versa3} alt="" />
            <img className='imaghover' src={versaHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Silk Serenity</h1>
            <h4>Hand Tufted</h4>
            <p>Silk Serenity, a hand-tufted K-Silk masterpiece that invites warmth and refinement into any space. Its soft, lustrous fibers catch the light, creating a delicate sheen that enhances the room’s ambiance. Perfect for high-traffic areas, Silk Serenity combines resilience with refined comfort, making it both a stylish and practical addition to your decor. The plush texture offers a gentle underfoot experience, while the neutral tones harmonize effortlessly with any interior style.</p>
          </div>
        </section>
        {/* <section className='sections-2'>
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
        </section> */}
        <section className='sections-4'>
          <img src={versa4} alt="" />
          {/* <img src={ourdoor6} alt="" />
          <img src={ourdoor7} alt="" /> */}
        </section>
        <div className='textAtelier'>
            <h1>Customization</h1>
            <p>We understand that every customer has unique preferences, and if the colors of the proposed <br /> designs do not meet your exact requirements, we are more than happy to customize the rugs <br /> to suit your desires. We offer a wide range of available colors that can be tailored to your specific needs. </p>
            <h1>Please note that we specialize in custom-made carpets, allowing you to adjust colors, <br /> materials, size, and designs according to your preferences.</h1>
        </div>
    </div>
  )
}

export default CollectionVersa