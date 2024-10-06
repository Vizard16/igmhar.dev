import Head from 'next/head';
import Link from 'next/link';

import type { NextPage } from 'next';
import TechSlider from '@/components/TechSlider';
import Image from 'next/image';

// import {
//   TypeScriptIcon,
//   ReactIcon,
//   TailwindCssIcon,
//   NextJsIcon,
//   FigmaIcon,
//   InkscapeIcon,
//   PythonIcon,
// } from '@/components/Icons';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igmhar • Software Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative py-32 bg-[#EDEDEE]">
        <div
          className="absolute inset-0 z-[-1] bg-slate-100 bg-grid-slate-200"
          style={{
            maskImage: 'radial-gradient(black, transparent)',
            WebkitMaskImage: 'radial-gradient(black, transparent)',
          }}
        ></div>
        <div className="content-wrapper">
          <div className="relative">
            {/* title */}
            <h1 className="text-[#333333]">
              <span className="mb-3 block text-5xl font-bold md:mb-6 md:text-7xl">
                Hello! I am{' '}
                <strong className="font-extrabold text-gray-900">Igmhar</strong>
                ,
              </span>
              <span className="block text-xl md:text-2xl">
                Jr. <strong>Software</strong> <strong>Developer</strong> and{' '}
                <strong>Mechatronics Engineer</strong>
              </span>
            </h1>
            {/* cta */}
            <div className="mt-8 flex gap-2">
              <Link href="/" className="button min-w-[128px]">
                HIRE ME
              </Link>
              <Link href="/" className="button-outlined">
                RESUME
              </Link>
            </div>
            {/* carousel */}
            <div className="mt-32">
              <p className="mb-2 text-sm text-gray-400">
                tech stack/favorite tools:
              </p>
              {/* Carousel Container */}
              <div className="-mt-[10%] md:mt-0 ">
                <TechSlider />
              </div>
            </div>
            <div className="absolute right-0 -top-16 hidden lg:block">
              <Image
                alt="me"
                src="/me.jpeg"
                height={597}
                width={467}
                className="w-96"
                priority
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
