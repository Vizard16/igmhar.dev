import Head from 'next/head';
import Link from 'next/link';

import type { NextPage } from 'next';
import TechSlider from '@/components/TechSlider';
import Image from 'next/image';

import { SparklesIcon, HeartIcon, BoltIcon } from '@/components/Icons';

import type { ReactElement } from 'react';

interface FeaturedCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

const FeaturedCard = ({ icon, title, desc }: FeaturedCardProps) => {
  return (
    <div className="z-10 flex-1 rounded-2xl border border-slate-100 bg-white p-6 ">
      <div className="mb-1 flex items-center gap-4 font-bold text-gray-900 lg:flex-col lg:items-start">
        {icon}
        <h2 className="">{title}</h2>
      </div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igmhar • Software Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative border-b border-b-slate-100 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 z-[-1] bg-slate-100 bg-grid-slate-200 lg:bg-grid-big-slate-200/40"
          style={{
            maskImage: 'radial-gradient(black, transparent)',
            WebkitMaskImage: 'radial-gradient(black, transparent)',
          }}
        ></div>
        <div className="content-wrapper">
          <div className="relative">
            {/* title */}
            <h1 className="text-[#333333]">
              <span className="mb-3 block animate-fade-left text-5xl font-bold md:mb-4 md:text-7xl">
                Hello! I am{' '}
                <strong className="font-extrabold text-gray-900">Igmhar</strong>
                ,
              </span>
              <span className="block animate-fade-left text-xl animation-delay-100 md:text-2xl">
                Jr. <strong>Software</strong> <strong>Developer</strong> and{' '}
                <strong>Mechatronics Engineer</strong>
              </span>
            </h1>
            {/* cta */}
            <div className="mt-8 flex animate-fade-left gap-2 animation-delay-100">
              <Link
                href="/"
                className="button button--solid button--big min-w-[128px]"
              >
                Hire Me
              </Link>
              <Link href="/" className="button button--outlined button--big">
                Resume
              </Link>
            </div>
            {/* carousel */}
            <div className="mt-28 lg:mt-12 animate-fade-left transition duration-200">
              <p className="mb-2 text-sm text-gray-500 animation-delay-400">
                Tech stack I work with:
              </p>
              {/* Carousel Container */}
              <div className="-mt-[10%] md:mt-0 animate-fade-left transition duration-200 animation-delay-[500ms]">
                <TechSlider />
              </div>
            </div>
            <div className="absolute right-0 -top-28 hidden lg:block">
              <Image
                alt="me"
                src="/me.jpeg"
                height={597}
                width={467}
                className="w-[440px]"
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
                <div className="lg:rounded-full lg:bg-[#A199FF] lg:p-4">
                  <SparklesIcon className="h-5 w-5 text-[#FFC41F] lg:text-[#FFFF00]" />
                </div>
              }
              title="Effective & User-Friendly"
              desc="Develop solutions with a focus on intuitive and user-friendly interfaces while ensuring efficient functionality for robotics and automation systems."
            />
            <FeaturedCard
              icon={
                <div className="lg:rounded-full lg:bg-[#FF7DAC] lg:p-4">
                  <HeartIcon className="h-5 w-5 text-[#FF7DAC] lg:text-white" />
                </div>
              }
              title="Precision in Development"
              desc="Ensuring system consistency, ease of access, and continuous improvement in software, robotics or IA projects."
            />
            <FeaturedCard
              icon={
                <div className="lg:rounded-full lg:bg-[#BFF4FF] lg:p-4">
                  <BoltIcon className="h-5 w-5 text-[#5096FF]" />
                </div>
              }
              title="Fast & Optimized"
              desc="Prioritize writing clean, maintainable, and optimized code, ensuring high performance for robotics, AI, and control systems"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
