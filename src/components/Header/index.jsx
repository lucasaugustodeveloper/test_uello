import './style.scss'

import React from 'react'
import User from './user'
import Logo from './logo'

const Header = props => (
  <header className="header row">
    <Logo />
    <User
      user={{
        url: "https://avatars0.githubusercontent.com/u/7988674?s=40&v=4",
        name: "Lucas Augusto"
      }}
    />
  </header>
);

export default Header;
