import type { ReactElement } from 'react';
import React from 'react';

import Layout from '../components/layout/Layout';
import Styles from '../styles/Blog.module.css';

const Blog = () => {
  return (
    <div className={Styles.container}>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
