import React, { useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className="container-fluid shadow" id="top">
      <div className="container">
        <div className="navbar navbar-expand-lg py-lg-0 custom-navbar py-3 px-2 ">
          <a href="#" className="text-decoration-none">
            <span className=" display-5 fw-bold">KidKinder</span>
          </a>
          <button
            className="navbar-toggler"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              menuToggle
                ? 'navbar-collapse custom-navbar-nav show collapse'
                : 'navbar-collapse custom-navbar-nav collapse'
            }`}
          >
            <div className="navbar-nav mx-auto">
              <a href="#" className="nav-link nav-item">
                Home
              </a>
              <a href="#" className="nav-link nav-item">
                About
              </a>
              <a href="#" className="nav-link nav-item">
                Clasess
              </a>
              <a href="#" className="nav-link nav-item">
                Teachers
              </a>
              <a href="#" className="nav-link nav-item">
                Gallery
              </a>
              <div
                className="dropdown nav-item"
                onMouseLeave={() => {
                  setShow(false)
                }}
              >
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onMouseEnter={() => {
                    setShow(true)
                  }}
                >
                  Pages
                </a>
                {show && (
                  <div className="dropdown-menu show border-1 rounded border bg-white bg-opacity-50 shadow">
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      Blog Grid
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      Blog Grid
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="nav-link nav-item">
                Contact
              </a>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill px-4 py-1 text-white"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
