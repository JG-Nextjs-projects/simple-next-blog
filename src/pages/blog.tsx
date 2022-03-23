import { GetStaticProps } from 'next';
import Link from 'next/link';
import type { ReactElement } from 'react';
import React from 'react';

import Layout from '../components/layout/Layout';
import Styles from '../styles/Blog.module.css';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';

type Props = {
  posts: IPost[];
};

const Blog = ({ posts }: Props) => {
  return (
    <>
      <div className={Styles.container}>
        <h1 style={{ marginBottom: '3rem' }}>Blog</h1>

        {posts.map((post) => (
          <div key={post.slug}>
            <h2>
              <Link href={`post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <time>{post.date}</time>
            <p>{post.description}</p>
            <Link href={`post/${post.slug}`}>
              <a>Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'title', 'description']);

  return {
    props: {
      posts,
    },
  };
};
