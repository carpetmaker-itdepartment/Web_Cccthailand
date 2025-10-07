import React from 'react';
import "../styles/Home.scss";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import Navbar from "../components/Navbar";
// images
import banerSlide1 from "../images-home/BannerSlide1.png"; 
import banerSlide2 from "../images-home/BannerSlide2.png";
import banerSlide3 from "../images-home/BannerSlide3.png";
import banerSlide4 from "../images-home/BannerSlide4.png";
import banerSlide5 from "../images-home/BannerSlide5.png";
import HomeCCC1 from "../images-home/Home_CCC_1.png";
import HomeCCC2 from "../images-home/Home_CCC_2.png"; 





function Home() {
  return (
    <>
        {/* <Navbar/> */}
        <div className='home'>
        <section className='contentsHome1'>
            <div className="baner-home">
                <div className='bgTitle'>
                    <div className="title-baner">
                        <h1>Custom Creative Carpets <br /> CCC Thailand</h1>
                        <hr />
                        <p>BRINGING CARPET ARTISTRY TO YOUR DOORSTEP</p>
                    </div>
                </div>
                <div className='carousel'>
                    <Carousel sinterval={1000}>
                        <Carousel.Item>
                            <img src={banerSlide1} className='w-100' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banerSlide2} className='w-100' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banerSlide3} className='w-100' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banerSlide4} className='w-100' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={banerSlide5} className='w-100' alt="" />
                        </Carousel.Item>                       
                    </Carousel>
                </div>
            </div>
        </section>
        <section className='contentsHome2'>
            <div className="containerContentHome2">
                <div className="sine">
                    <img src={HomeCCC1} alt="" />
                    <div className="textsine">
                        <h1>SINCE 1986</h1>
                        <h4>a Trusted Carpet Manufacturer with Nearly Four Decades of Experience</h4>
                        <p>We are committed to being a global leader in world-class carpet manufacturing, anticipating client needs and delivering quality, creativity, and expertise that are trusted and recognized internationally.</p>
                        <Link to='/ourstory'>Discover more</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='contentsHome3'>
            <div className="containerContentHome3">
                <div className="ourFirst">
                    <div className="textourFirst">
                        <h1>OUR <br /> FIRST CLASS <br /> CARPETS</h1>
                        <p>Our first class carpets embody the concept of simplicity, but with smart, world-class quality products at a competitive delivered price.</p>
                        <Link to='/ourcollections'>Click to see some of our collections</Link>
                    </div>
                    <img src={HomeCCC2} alt="" />
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Home