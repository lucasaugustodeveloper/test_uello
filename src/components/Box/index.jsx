import './style.scss'

import React from 'react'

const Box = ({ classID, title, children }) => (
  <div className={`box ${classID}`}>
    <div className="box__title">
      {title}
    </div>
    <p className="box__children">
      {children}
    </p>
  </div>
)

export default Box
