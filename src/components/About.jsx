import React from 'react'
import aboutImg1 from '../../public/assets/img/about-2.jpg'
import aboutImg from '../../public/assets/img/about-1.jpg'
import { AiOutlineCheck } from 'react-icons/ai'

const About = () => {
  return (
    <div className="container-fluid pt-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              src={aboutImg}
              alt=""
              className="img-fluid mb-lg-0 mb-5 rounded"
            />
          </div>
          <div className="col-lg-7">
            <p className="section-title text-primary pe-5 ">
              <span className="pe-2">LEARN ABOUT US</span>
            </p>
            <h1 className="text-primary fw-bold">Best School For Your Kids</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>

            <div className="row align-items-center pb-4 pt-2">
              <div className="col-md-4">
                <img src={aboutImg1} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-8">
                <ul className="list-inline m-0">
                  <li className="border-top py-3">
                    <AiOutlineCheck className="text-primary me-3" />
                    <span>Labore eos amet dolor amet diam</span>
                  </li>
                  <li className="border-top py-3">
                    <AiOutlineCheck className="text-primary me-3" />
                    <span>Etsea et sit dolor amet ipsum</span>
                  </li>
                  <li className="border-top border-bottom py-3">
                    <AiOutlineCheck className="text-primary me-3" />
                    <span>Diam dolor diam elitripsum vero.</span>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill px-4 py-2 text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
