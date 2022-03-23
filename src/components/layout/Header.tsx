import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  const router = useRouter();
  const href = '/';

  return (
    <header className={router.asPath === href ? Styles.homeHeader : Styles.siteHeader}>
      <div className={Styles.container}>
        <Link href="/">
          <a className={Styles.logo}>Simple Blog</a>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
