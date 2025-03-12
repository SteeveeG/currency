import { FC } from 'react';
import Head from 'next/head';
import Display from '../components/display/display';
import Header from '../components/header/header';
import { GetServerSideProps } from 'next';
import { scrapeWebsite } from './../../lib/scraper';


interface HomeProps {
  scrapedData: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const url = process.env.WEBSITE_URL as string;
  const cssClass = process.env.CLASS_NAME as string;
  const data = await scrapeWebsite(url,cssClass);

  return {
    props: {
      scrapedData: data,
    },
  };
}

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
    </div>
  );
};

export default Home;