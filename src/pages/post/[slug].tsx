import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import Layout from '../../components/layout/Layout';
import Styles from '../../styles/PostPage.module.css';
import { IPost } from '../../types/post';
import { getAllPosts, getPost } from '../../utils/mdxUtils';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <Layout>
      <Head>
        <meta name="description" content={frontMatter.description} key="description" />
        <meta property="og:description" content={frontMatter.description} key="ogDescription" />
        <meta property="og:image" content="" key="ogImage" />
      </Head>

      <div className={Styles.container}>
        <article className="">
          <header>
            <h1>{frontMatter.title}</h1>
            <p>{frontMatter.description}</p>
          </header>

          <MDXRemote {...source} />
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
