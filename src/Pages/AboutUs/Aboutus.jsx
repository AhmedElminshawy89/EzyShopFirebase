import React from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import CommoSection from '../../Components/UI/CommoSection'
import '../AboutUs/About.css'
import img1 from '../../assests/images/single-sofa-01.jpg'
import img2 from '../../assests/images/wireless-01.png'
import img3 from '../../assests/images/bedroom.jpg'
import img4 from '../../assests/images/single-sofa-04.png'
import img5 from '../../assests/images/double-sofa-02.png'
import img6 from '../../assests/images/phone-06.jpg'


export default function Aboutus() {
  return (
    <Helmet title={"About Us"}>
      <section>
        <CommoSection title={'About Us'}/>
        <div className='about top-product'>
          {/* <h3 className='section-title'>About Us</h3> */}
          <div className='containerr'>
            <div className='info'>
              <p>In a way, its About Us page is more of an “about the customer” page that allows shoppers to explore and
                 connect through its video, before bringing it back to its promise as a company.
                It’s a departure from copy-driven pages, but it 
                works in the favor of WP Standard as a brand of few words, or for brands that want to say a lot by saying very little.</p>
            </div>
            <div className='images-box'>
                  <img src={img6} />
            </div>
          </div>
      </div>
        <div className="gallery" id="gallery">
        <h1 className="section-title">gallery</h1>
        <div className="container mt-5">
            <div className="box">
                <div className="image">
                    <img src={img1} alt="Not Found"/>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img  src={img2}  alt="Not Found"/>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img  src={img3}  alt="Not Found"/>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img  src={img4}  alt="Not Found"/>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img  src={img5}  alt="Not Found"/>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img  src={img6}  alt="Not Found"/>
                </div>
            </div>
        </div>
        </div>
        <div className="features" id="features">
        <h2 className="section-title">Features</h2>
        <div className="container mt-5">
            <div className="box quality">
                <div className="img-holder"><img src={img3} alt="" /></div>
                <h2>Quality</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                <a href="#">More</a>
            </div>
            <div className="box time">
                <div className="img-holder"><img src={img4} alt="" /></div>
                <h2>Time</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                <a href="#">More</a>
            </div>
            <div className="box passion">
                <div className="img-holder"><img src={img6} alt="" /></div>
                <h2>Passion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                <a href="#">More</a>
            </div>
        </div>
        </div>
        
      </section>
    </Helmet>

  )
}
