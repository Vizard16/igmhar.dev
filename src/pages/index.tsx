import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igmhar Sánchez | Software Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <p>Hello</p>
        <h1 className="text-4xl font-extrabold">
          Igmhar Sánchez, Software Developer & Mechatronics Engineer
        </h1>
      </>
    </>
  );
};

export default Index;
