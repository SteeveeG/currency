import { FC } from 'react';
import Head from 'next/head';
import Display from '../components/display/display';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>My Next.js One-Pager</title>
        <meta name="description" content="A simple one-page site with Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <Header />
        <Display />
      </main>

      <Footer />
    </div>
  );
};

export default Home;