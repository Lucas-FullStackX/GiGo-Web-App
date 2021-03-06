import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '../src/components/NavBar';

/**
 * @returns {NextPage} -Home Page.
 */
export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
};
export default Home;
