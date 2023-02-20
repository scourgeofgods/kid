import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const Seat = () => {
  return (
    <div className="container-fluid py-5" id="seat">
      <div className="container">
        <div className="row g-4 g-lg-2">
          <div className="col-md-7 col-lg-6">
            <p className="section-title pe-5">
              <span className="pe-2">BOOK A SEAT</span>
            </p>
            <h1 className="fw-bold mb-4">Book A Seat For Your Kid</h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="list-inline mt-0">
              <li className="list-item py-3">
                <AiOutlineCheck className="text-primary me-3" />
                <span>Labore eos amet dolor amet diam</span>
              </li>
              <li className="list-item py-3">
                <AiOutlineCheck className="text-primary me-3" />
                <span>Etsea et sit dolor amet ipsum</span>
              </li>
              <li className="list-item py-3">
                <AiOutlineCheck className="text-primary me-3" />
                <span>Diam dolor diam elitripsum vero.</span>
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-primary rounded-pill px-5 py-3 text-white"
            >
              Book Now
            </a>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="card border-0">
              <div className="card-header bg-secondary rounded-top">
                <h1 className="p-2 text-center text-white">Book A Seat</h1>
              </div>
              <div className="card-body bg-primary rounded-bottom p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded border-0 p-4"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-3 rounded border-0 p-4"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-select form-select-md d-inline-block p-4 ">
                      <option selected>Select Class</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-secondary rounded-pill btn-block mt-4 border-0 px-5 py-3">
                      Book Seat
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seat
