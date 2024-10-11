import Link from 'next/link';
import LastCommit from '@/components/LastCommit';
import dayjs from '@/utils/dayjs';

const Footer = () => {
  return (
    <footer className="border-t border-divider-light bg-white text-sm text-gray-900 dark:border-divider-dark dark:bg-slate-900 dark:text-slate-200">
      <div className="content-wrapper">
        <section className="py-10 font-semibold">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 lg:gap-x-6">
            <li>
              <Link href="/">Mexico</Link>
            </li>
            <li className="w-full sm:hidden"></li>
            <li>
              <a
                href="https://github.com/Vizard16/igmhar.dev"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </li>
            <li>
              <Link href="/">Algo</Link>
            </li>
            <li>
              <Link href="/">Mail</Link>
            </li>
          </ul>
        </section>
        <div className="flex justify-between border-t border-divider-light py-6 text-xs dark:border-divider-dark">
          <div className="font-semibold">
            &copy; {dayjs().format('YYYY')}, Igmhar Sánchez
          </div>
          <div className=" text-gray-500 dark:text-slate-400">
            <LastCommit />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
