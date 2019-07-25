import React from 'react'
import './styles.scss'

const User = ({ user }) => (
  <div className="header__user col-lg-2">
    <div className="row end-lg">
      <div className="header__user__img col-lg-2">
        <img src={user.url} alt={user.name} className="header__user__img__item" />
      </div>
      <div className="header__user__text col-lg-6">
        <p className="header__user__text__name">{user.name}</p>
      </div>
    </div>
  </div>
);

export default User;
