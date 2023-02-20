import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../public/assets/img/testimonial-1.jpg'
import img2 from '../../public/assets/img/testimonial-2.jpg'
import img3 from '../../public/assets/img/testimonial-3.jpg'

const Testimonial = () => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <div
      className="container-fluid  bg-primary bg-opacity-75 py-5"
      id="testimonial"
    >
      <div className="container">
        <div className="text-center">
          <p className="section-title px-5">
            <span className="px-2">TESTIMONIAL</span>
          </p>
          <h1 className="fw-bold">What Parents Say!</h1>
        </div>
        <div className="row my-5">
          <Slider {...settings}>
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img1} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img2} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>{' '}
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img3} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img1} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img2} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>{' '}
            <div className="card" style={{ width: 300 }}>
              <div className="card-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  qui illum est laboriosam dolores nemo dolorum ab magnam
                  voluptas
                </p>
              </div>
              <div className="card-footer d-flex">
                <img src={img3} className="img-fluid rounded-circle" alt="" />
                <div className="d-flex ms-3 flex-column justify-content-center">
                  <h4 className="fw-bold mb-0">Parent Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
