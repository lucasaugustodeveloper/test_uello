import './style.scss'

import React from 'react'

const Title = ({ title }) => (
  <div className="title row">
    <div className="title__text col-lg-10">
      { title }
    </div>
    <div className="title__button col-lg-2">
      <button>
        Ajudar
      </button>
    </div>
  </div>
);

export default Title;
