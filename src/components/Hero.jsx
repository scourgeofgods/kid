import React from 'react'
import heroImg from '../../public/assets/img/header.png'
const Hero = () => {
  return (
    <div className="container-fluid bg-primary px-md-5 mb-5 px-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h4 className="mb-3">Kids Learning Center</h4>
            <h1 className="display-3 fw-bold ">
              New Approach to Kids Education
            </h1>
            <p className="lh-lg">
              Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet
              sed sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore
              sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est
              justo dolore.
            </p>
            <a
              href="#"
              className="btn rounded-pill btn-secondary py-3  px-4 text-white"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-6 ">
            <img src={heroImg} alt="" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
