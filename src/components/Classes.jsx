import React from 'react'
import cardImg1 from '../../public/assets/img/classes-1.jpg'
import cardImg2 from '../../public/assets/img/classes-2.jpg'
import cardImg3 from '../../public/assets/img/classes-3.jpg'

const Classes = () => {
  return (
    <div className="container-fluid py-5" id="class">
      <div className="container">
        <div className="text-center">
          <p className="section-title px-5">
            <span className="px-2">POPULAR CLASSES</span>
          </p>
          <h1 className="fw-bold mb-5">Classes for Your Kids</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-light border-0 pb-2 shadow-sm">
              <img className="card-img-top mb-3 rounded" src={cardImg2} />
              <div className="card-body text-center">
                <h3 className="cart-title">Drawing Class</h3>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 border-end ">3 - 6 Years</div>
                </div>
                <div className="row border-bottom border">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 border-end">08:00 - 10:00</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 border-end">$290 / Month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light border-0 pb-2 shadow-sm">
              <img className="card-img-top mb-3 rounded" src={cardImg1} />
              <div className="card-body text-center">
                <h3 className="cart-title">Drawing Class</h3>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 border-end ">3 - 6 Years</div>
                </div>
                <div className="row border-bottom border">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 border-end">08:00 - 10:00</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 border-end">$290 / Month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light border-0 pb-2 shadow-sm">
              <img className="card-img-top mb-3 rounded" src={cardImg3} />
              <div className="card-body text-center">
                <h3 className="cart-title">Drawing Class</h3>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 border-end ">3 - 6 Years</div>
                </div>
                <div className="row border-bottom border">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 border-end">08:00 - 10:00</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 border-end py-1 text-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 border-end">$290 / Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
