import React from 'react';
import TopBar from './top-bar';
import HeaderSub from './sub-manu';
import HeaderSubmanu from './sub-header-lmiddel-part';

const Header = () => {
  return (
    <div>
      <TopBar />
      <HeaderSub />
      <HeaderSubmanu />
    </div>
  );
};

export default Header;