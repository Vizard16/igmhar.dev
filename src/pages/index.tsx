import Head from 'next/head';

import type { NextPage } from 'next';
import Quote from '@/components/Quote';
import FeaturedCard from '@/components/FeaturedCard';

import { SparklesIcon, CodeIcon, BoltIcon } from '@/components/Icons';
import Header from '@/components/Header';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igmhar &middot; Software Developer</title>
        <meta name="description" content="Hi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>
        <div className="content-wrapper">
          <div className="-mt-1 mb-8 flex flex-col gap-4 lg:-mt-20 lg:flex-row lg:gap-8">
            <FeaturedCard
              icon={
                <div className="rounded-full bg-orange-400 p-4 highlight-orange-500 dark:bg-orange-600">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Effective & User-Friendly"
              desc="Develop solutions with a focus on intuitive and user-friendly interfaces while ensuring efficient functionality for robotics and automation systems."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-[#86A7FC] p-4 highlight-blue-900 dark:bg-[#5c7ed4]">
                  <CodeIcon className="h-5 w-5 text-white" />
                </div>
              }
              title="Precision in Development"
              desc="Ensuring system consistency, ease of access, and continuous improvement in software, robotics or IA projects."
            />
            <FeaturedCard
              icon={
                <div className="rounded-full bg-sky-400 p-4 highlight-sky-500 dark:bg-sky-600">
                  <BoltIcon className="h-5 w-5 text-yellow-200" />
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
