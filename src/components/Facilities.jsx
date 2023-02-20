import React from 'react'
import {
  GiWoodenFence,
  GiDrum,
  GiHeartStake,
  GiFoodTruck,
} from 'react-icons/gi'
import {
  MdDirectionsTransitFilled,
  MdOutlineCastForEducation,
} from 'react-icons/md'

const Facilities = () => {
  return (
    <div className="container-fluid pt-5" id="facilities">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4 rounded p-4 shadow-lg">
              <GiWoodenFence className="w-50 h-50 me-2" />
              <div>
                <h4>Play Ground</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4  rounded p-4 shadow-lg">
              <GiDrum className="w-50 h-50 me-2" />
              <div>
                <h4>Music and Dance</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4 rounded p-4 shadow-lg">
              <GiHeartStake className="w-50 h-50 me-2" />
              <div>
                <h4>Arts and Crafts</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4 rounded p-4 shadow-lg">
              <MdOutlineCastForEducation className="w-50 h-50 me-2" />
              <div>
                <h4>Educational Tour</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6  col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4 rounded p-4 shadow-lg">
              <MdDirectionsTransitFilled className="w-50 h-50 me-2" />
              <div>
                <h4>Safe Transportation</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-4 pb-2">
            <div className="d-flex mb-4 rounded p-4 shadow-lg">
              <GiFoodTruck className="w-50 h-50 me-2" />
              <div>
                <h4>Healthy food</h4>
                <p>
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
