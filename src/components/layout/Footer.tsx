import React from 'react';

import Styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return <footer className={Styles.siteFooter}>&copy; {year} Simple Blog</footer>;
};

export default Footer;
