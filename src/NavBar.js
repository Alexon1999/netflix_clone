import React, { useEffect } from 'react';
import './NavBar.css';
import { useState } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    // {'nav ' + (show && 'nav__black')}
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-220px-Netflix_2015_logo.svg.png'
        alt=''
      />
      <img
        className='nav__avatar'
        src='https://occ-0-2216-768.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABU-1vH1LNsfdX_4gJUdLkaBf7OzhXmEn3fR2ct21VOiJPJ2ZYlWcw1oQdzVJbdU0rMYoBCKS9koi8GJWLRGHG74.png?r=f08'
        alt=''
      />
    </nav>
  );
};

export default NavBar;
