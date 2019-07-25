import './style.scss'

import React from 'react'

import TruckStatus from "../../../assets/images/icons/truckStatus.svg";

const Status = () => (
  <div className="status row">
    <div className="col-lg-1">
      <img src={TruckStatus} alt="status" className="status__img" />
    </div>
    <div className="col-lg-2">
      <p className="status__text">Status</p>
    </div>
  </div>
);

export default Status
