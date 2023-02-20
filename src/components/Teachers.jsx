import React from 'react'
import member4 from '../../public/assets/img/team-4.jpg'
import member1 from '../../public/assets/img/team-1.jpg'
import member2 from '../../public/assets/img/team-2.jpg'
import member3 from '../../public/assets/img/team-3.jpg'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Teachers = () => {
  return (
    <div className="container-fluid py-5" id="teachers">
      <div className="container">
        <div className="pb-2 text-center">
          <p className="section-title px-5">
            <span className="px-2">Meet Our Teachers</span>
          </p>
          <h1 className="fw-bold mb-5">Meet Our Teachers</h1>
        </div>
        <div className="row g-5 g-lg-3 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-3 text-center">
            <div className="team position-relative mb-4 overflow-hidden">
              <img src={member1} alt="" className="img-fluid w-100" />
              <div className="overlay d-flex align-items-center justify-content-center w-100 h-100 ">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <h4>Julia Smith</h4>
            <i>Music Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="team position-relative mb-4 overflow-hidden">
              <img src={member2} alt="" className="img-fluid w-100" />
              <div className="overlay d-flex align-items-center justify-content-center w-100 h-100 ">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <h4>John Doe</h4>
            <i>Language Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="team position-relative mb-4 overflow-hidden">
              <img src={member4} alt="" className="img-fluid w-100" />
              <div className="overlay d-flex align-items-center justify-content-center w-100 h-100 ">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <h4>Donald John</h4>
            <i>Art Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="team position-relative mb-4 overflow-hidden">
              <img src={member3} alt="" className="img-fluid w-100" />
              <div className="overlay d-flex align-items-center justify-content-center w-100 h-100 ">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className=" btn btn-outline-secondary rounded-circle bg-primary text-white"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
            <h4>Mollie Ross</h4>
            <i>Dance Teacher</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers
