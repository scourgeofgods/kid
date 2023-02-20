import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary px-sm-3 px-md-5 mt-5 py-5 text-white">
      <div className="row row-cols-md-2 row-cols-lg-4 justify-content-center g-5 pt-5">
        <div className="col">
          <a href="#" className="navbar-brand mb-2">
            <h1 className="fw-bold text-white">KidKinder</h1>
          </a>
          <p>
            Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
            dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
            stet diam duo eos rebum ipsum diam ipsum elitr.
          </p>
          <div className="d-flex social-links align-items-center mb-3 gap-2">
            <a
              href="#"
              className="social-link btn rounded-circle text-primary btn-outline-primary bg-secondary"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="social-link btn rounded-circle text-primary btn-outline-primary bg-secondary"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="social-link btn rounded-circle text-primary btn-outline-primary bg-secondary"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="social-link btn rounded-circle text-primary btn-outline-primary bg-secondary"
            >
              <i class="fa-solid fa-basketball"></i>
            </a>
          </div>
        </div>
        <div className="col">
          <div>
            <h1 className="text-primary fw-bold mb-2">Get In Touch</h1>
            <ul className="list-inline d-flex flex-column mt-0">
              <li className="d-flex list-item gap-2">
                <i className="fas fa-location fa-2x text-primary"></i>
                <div className="d-flex ms-3 flex-column">
                  <h4 className="fw-bold mb-0"> Address</h4>
                  <p>123 Street, New York, USA</p>
                </div>
              </li>
              <li className="d-flex  list-item gap-2">
                <i className="fas fa-envelope fa-2x text-primary"></i>
                <div className="d-flex ms-3 flex-column">
                  <h4 className="fw-bold mb-0"> Email</h4>
                  <p>info@example.com</p>
                </div>
              </li>
              <li className="d-flex list-item gap-2">
                <i className="fas fa-phone fa-2x text-primary"></i>
                <div className="d-flex ms-3 flex-column">
                  <h4 className="fw-bold mb-0"> Phone</h4>
                  <p>+012 345 67890</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div>
            <h1 className="text-primary fw-bold mb-2">QuickLinks</h1>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  Our Class
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  Our Teacher
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  Our Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa fa-angle-right me-2"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <h1 className="fw-bold text-primary mb-2">Contact Us</h1>
          <form>
            <div className="form-control">
              <input
                type="text"
                className="border-0 py-2"
                placeholder="Your Name"
              />
            </div>
            <div className="form-control my-3">
              <input
                type="email"
                className="border-0 py-2"
                placeholder="Your Email"
              />
            </div>
            <div>
              <button className="btn btn-primary rounded-pill w-100 px-5 py-3 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
