import Head from 'next/head';
import Link from 'next/link';

import type { NextPage } from 'next';
import TechSlider from '@/components/TechSlider';
import Image from 'next/image';
import Quote from '@/components/Quote';
import FeaturedCard from '@/components/FeaturedCard';

import {
  SparklesIcon,
  HeartIcon,
  BoltIcon,
  DocumentIcon,
} from '@/components/Icons';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igmhar &middot; Software Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative z-0 border-b border-b-slate-100 bg-slate-100 pt-28 pb-20 dark:border-slate-800 dark:bg-[#05011E] lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 z-[-1] bg-slate-50 bg-grid-slate-200/60 dark:bg-slate-900 dark:bg-grid-slate-50/[0.04] lg:bg-grid-big-slate-200/50 lg:dark:bg-grid-big-slate-50/[.02]"
          style={{
            maskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 160% center, black 40%, transparent)',
          }}
        ></div>
        <div className="content-wrapper">
          <div className="relative">
            {/* title */}
            <div className="relative z-10">
              <div className="flex animate-fade-left items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl">
                Hi!
              </div>
              <h1 className="text-gray-600 dark:text-slate-400">
                <span className="mb-3 block animate-fade-left text-5xl font-bold md:mb-4 md:text-7xl">
                  I&apos;m{' '}
                  <strong className="font-extrabold text-gray-900 dark:text-slate-50">
                    Igmhar
                  </strong>
                  ,
                </span>
                <span className="block animate-fade-left text-xl animation-delay-100 md:text-2xl">
                  <strong className="font-bold"> Jr. Software</strong>{' '}
                  <strong className="font-bold">Developer</strong> and{' '}
                  <strong className="font-bold">Mechatronics Engineer</strong>
                </span>
              </h1>
            </div>
            {/* cta */}
            <div className="mt-8 flex gap-2">
              <Link
                href="/"
                className="button button--solid button--big min-w-[128px] animate-fade-left animation-delay-200"
              >
                Get in touch
              </Link>
              <Link
                href="/"
                className="button button--ghost button--big animate-fade-left px-2 animation-delay-300"
              >
                <DocumentIcon className="h-5 w-5" />
                RESUME
              </Link>
            </div>
            {/* carousel */}
            <div className="mt-28 lg:mt-12 animate-fade-left transition duration-200">
              <p className="mb-2 animate-fade-left text-sm text-gray-600 animation-delay-400 dark:text-slate-400">
                Tech stack I work with:
              </p>
              {/* Carousel Container */}
              <div className="-mt-[10%] md:mt-0 animate-fade-left transition duration-200 animation-delay-[500ms]">
                <TechSlider />
              </div>
            </div>
            <div className="pointer-events-none absolute -top-16 right-0 z-0 hidden select-none lg:block">
              <Image
                alt="me"
                src="/me.jpeg"
                height={597}
                width={467}
                className="w-[440px animate-fade-right animation-delay-600"
                priority
              />
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="content-wrapper">
          <div className="-mt-1 mb-8 flex flex-col gap-4 lg:-mt-20 lg:flex-row lg:gap-8">
            <FeaturedCard
              icon={
                <div className="rounded-full bg-violet-400 p-4 dark:bg-violet-700">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Effective & User-Friendly"
              desc="Develop solutions with a focus on intuitive and user-friendly interfaces while ensuring efficient functionality for robotics and automation systems."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-red-400 p-4 dark:bg-red-500">
                  <HeartIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Precision in Development"
              desc="Ensuring system consistency, ease of access, and continuous improvement in software, robotics or IA projects."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-sky-400 p-4 dark:bg-sky-600">
                  <BoltIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Fast & Optimized"
              desc="Prioritize writing clean, maintainable, and optimized code, ensuring high performance for robotics, AI, and control systems"
            />
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="content-wrapper">
          <div className="flex items-center justify-center py-8">
            <Quote />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
