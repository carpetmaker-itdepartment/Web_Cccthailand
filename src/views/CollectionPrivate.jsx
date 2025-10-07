import React from 'react';
import "../styles/Private.scss";

import private1 from "../images-Private/1_AeroLuxe_Default State.png";
import privateHov1 from "../images-Private/1_AeroLuxe_Hover State.png";
import private2 from "../images-Private/2_Scatter_Default State.png";
import privateHov2 from "../images-Private/2_Scatter_Hover State.png";
import private3 from "../images-Private/3_Mahogani_Default State.png";
import privateHov3 from "../images-Private/3_Mahogani_Hover State.png";
import private4 from "../images-Private/4_Mazes_Default State.png";
import privateHov4 from "../images-Private/4_Mazes_Hover State.png";
import private5 from "../images-Private/Private Jet_1_Plain_CCC.png";
import private6 from "../images-Private/Private Jet_2_Tencel_CCC.png";
import private7 from "../images-Private/Private Jet_3_Stripe.png";





function CollectionPrivate() {
  return (
    <div className='private'>
        <section className='sections-1'>
          <div className='banner'>
            <div className="titleBanner">
              <h1>PRIVATE JET <br /> COLLECTION</h1>
              <p>
                Enhance your aircraft with our premium carpet, combining luxury and durability. <br /> 
                Its stain-resistant surface ensures easy maintenance, while providing a soft, <br /> 
                comfortable feel underfoot. Designed to meet aviation safety standards, <br /> 
                it adds both style and security to your cabin. <br /> 
                Elevate the passenger experience with a touch of elegance.
              </p>
            </div>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>AEROLUXE</h1>
            </div>
            <img className='imagdefaul' src={private1} alt="" />
            <img className='imaghover' src={privateHov1} alt="" />
          </div>
          <div className="textsec2">
            <h1>AeroLuxe</h1>
            <h4>Hand Tufted, Carving</h4>
            <p>The AeroLuxe carpet brings an unmatched level of elegance and comfort to your private jet interior. Its meticulously hand-tufted design features an intricate, subtle geometric pattern that adds depth and visual interest without overwhelming the refined ambiance of the cabin. Delicately carved lines form a repeating motif that evokes the timeless appeal of luxury textiles, creating a sense of movement and flow that complements the sleek contours of the aircraft interior. With a stain-resistant surface for effortless maintenance, AeroLuxe combines luxury with resilience, ensuring a plush, welcoming feel underfoot.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>SCATTER</h1>
            </div>
            <img className='imagdefaul' src={private2} alt="" />
            <img className='imaghover' src={privateHov2} alt="" />
          </div>
          <div className="textsec2">
            <h1>Scatter</h1>
            <h4>Hand Tufted</h4>
            <p>The Scatter carpet captures the essence of high-altitude elegance, designed to elevate the experience of private jet travel. Its hand-tufted pattern features a delicate, scattered texture that mimics the soft, shifting hues of clouds and sky as seen from above. The subtle variations in tone add a sense of movement and calm, creating a tranquil atmosphere that complements the luxurious setting of the cabin. Crafted with durability and comfort in mind, Skyline Drift offers a plush, inviting feel underfoot, while its easy-care surface ensures effortless maintenance.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>MAHOGANI</h1>
            </div>
            <img className='imagdefaul' src={private3} alt="" />
            <img className='imaghover' src={privateHov3} alt="" />
          </div>
          <div className="textsec2">
            <h1>Mahogani</h1>
            <h4>Hand Tufted</h4>
            <p>The Mahogani carpet brings warmth and understated luxury to your private jet cabin, inspired by the rich tones and textures of natural wood grain and softly drifting clouds. This hand-tufted masterpiece combines gentle earth tones with an organic pattern that feels both refined and inviting. The subtle interplay of warm hues and intricate detailing creates a grounding, tranquil ambiance that complements the elegance of the cabin interior. Designed for comfort and durability, Mahogani is as practical as it is beautiful, with a plush texture that offers a soft, welcoming feel underfoot.</p>
          </div>
        </section>
        <section className='sections-2'>
          <div className='images'>
            <div className='imagesText'>
              <h1>MAZES</h1>
            </div>
            <img className='imagdefaul' src={private4} alt="" />
            <img className='imaghover' src={privateHov4} alt="" />
          </div>
          <div className="textsec2">
            <h1>Mazes</h1>
            <h4>Hand Tufted</h4>
            <p>The Mazes carpet brings an intriguing and bold design to your private jet, adding depth and character to the cabin interior. This hand-tufted masterpiece features a geometric maze-like pattern in rich, earthy tones that draw the eye and create a sense of refined movement throughout the space. The interconnected lines and squares offer a modern yet timeless aesthetic, grounding the cabin with a sense of purpose and direction.</p>
          </div>
        </section>
        <section className='sections-4'>
          <img src={private5} alt="" />
          <img src={private6} alt="" />
          <img src={private7} alt="" />
        </section>
        <div className='textAtelier'>
          <p>Please contact us to request for e-catalog</p>
        </div>
    </div>
  )
}

export default CollectionPrivate