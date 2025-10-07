import React from 'react';
import "../styles/OurStory.scss";
import ourStoryCCC1 from "../images-story/OurStory_CCC_1.png";
import ourStoryCCC2 from "../images-story/OurStory_CCC_2.png";
import ourStoryCCC3 from "../images-story/OurStory_CCC_3.png";
import ourStoryCCC4 from "../images-story/OurStory_CCC_4.png";
import ourStoryCCC5 from "../images-story/OurStory_CCC_5.png";
import ourStoryCCC6 from "../images-story/OurStory_CCC_6.png";



function OurStory() {
  return (
    <div className='story'>
      <div className="containerStory">
        <section className='story1'>
          <div>
            <h1>AT CUSTOM CREATIVE CARPETS, CCC THAILAND <br /> WE BRING YOUR IDEAS TO LIFE. </h1>
            <p>From exclusive patterns to complex designs, our advanced dyeing process in the lab unlock limitless <br /> color possibilities, ensuring your ideas come to life.</p>
          </div>
        </section>
        <section className='story2'>
          <div>
            <img src={ourStoryCCC1} alt="" />
          </div>
        </section>
        <section className='story3'>
          <div className='story3Contents'>
            <img src={ourStoryCCC2} alt="" />
            <div className='story3Title'> 
              <h1>HOW <br /> WE <br /> WORK</h1>
              <p>With many years of tufting expertise, <br /> our skilled team is dedicated to <br /> bringing custom, imaginative carpet <br /> solutions to life. Every project is an <br /> opportunity to push boundaries and <br /> deliver a piece that is uniquely yours. <br /> Here’s how we make it happen:</p>
            </div>
          </div>
        </section>
        <section className='story4'>
          <div className="story4Contents">
            <div className="contents">
              <div className='titleContents'>
                <h1>UNDERSTANDING <br /> YOUR VISION</h1>
                <p>We begin by exploring your style preferences—whether classic, modern, or unique. Our team captures your vision through thoughtful discussions and inspiration. With expert guidance, we help you navigate textures, colors, and patterns to help you find the perfect fit, ensuring your carpet beautifully complements your space and meets your vision</p>
              </div>
              <img src={ourStoryCCC3} alt="" />
            </div>
            {/* ---- */}
            <div className="contents">
              <img src={ourStoryCCC4} alt="" />
              <div className='titleContents'>
                <h1>CRAFTED <br /> TO PERFECTION</h1>
                <p>At Custom Creative Carpets, every piece is crafted with precision and care. With premium materials and skilled artistry, we create carpets that are not only beautiful but built to endure. From start to finish, we uphold the highest standards to ensure lasting quality in every detail.</p>
              </div>
            </div>
            {/* ---- */}
            <div className="contents">
              <div className='titleContents'>
                <h1>QUALITY <br /> ASSURANCE <br /> & DELIVERY</h1>
                <p>Each carpet undergoes a thorough quality check to ensure it meets your expectations and our highest standards. Once approved, we arrange secure delivery right to your doorstep, making sure it arrives flawlessly</p>
              </div>
              <img src={ourStoryCCC5} alt="" />
            </div>
            {/* ---- */}
            <div className="contents">
              <img src={ourStoryCCC6} alt="" />
              <div className='titleContents'>
                <h1>READY <br /> TO BRING <br /> YOUR VISION <br /> TO LIFE?</h1>
                <p>Start your project with Custom Creative Carpets today and discover the artistry of true custom design.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurStory