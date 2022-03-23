import type { ReactElement } from 'react';
import React from 'react';

import Layout from '../components/layout/Layout';
import Styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={Styles.container}>
      <h1>Contact Page</h1>
      <p>Add contact details here.</p>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
