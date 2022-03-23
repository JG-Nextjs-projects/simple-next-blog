import Link from 'next/link';
import React from 'react';

import Styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={Styles.navPrimary}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Nav;
