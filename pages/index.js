import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full prose dark:prose-invert mx-auto px-6 text-center">
        <section className="mt-16 mb-10">
          <blockquote className="text-lg italic text-gray-600 dark:text-gray-400">
            “Knowing yourself is the beginning of all wisdom.”
            <br />
            <span className="text-sm">— Aristotle</span>
          </blockquote>
        </section>

        <section className="max-w-2xl mx-auto text-left">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400">This is not</h2>
          <p>
            A guide. A tutorial. A place for polished thoughts.<br />
            Most of what's written here will be obvious to 99% of the internet.<br />
            That's fine — it's not for them.
          </p>

          <h2 className="text-xl font-bold mt-10 text-red-600 dark:text-red-400">This is</h2>
          <p>
            A personal chronicle.<br />
            A journey of rediscovering technology, starting from zero.<br />
            A quiet defiance against the part of me that tried to blend in by staying silent.
          </p>
        </section>

        <section className="mt-16 mb-12">
          <blockquote className="text-lg italic text-gray-600 dark:text-gray-400">
            “The only true wisdom is in knowing you know nothing.”
            <br />
            <span className="text-sm">— Socrates</span>
          </blockquote>
        </section>

        <Link
          href="/posts"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-700 rounded-md hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-400"
        >
          Read the Blog →
        </Link>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
