import Link from 'next/link';
import LastCommit from '@/components/LastCommit';

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 py-8 text-sm text-gray-900 dark:border-slate-800 dark:text-slate-200">
      <div className="content-wrapper">
        <section className="mb-12 font-semibold">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <li>
              <Link href="/">Mexico</Link>
            </li>
            <li className="w-full sm:hidden"></li>
            <li>
              <Link href="/">Source Code</Link>
            </li>
            <li>
              <Link href="/">Algo</Link>
            </li>
            <li>
              <Link href="/">Mail</Link>
            </li>
          </ul>
        </section>
        <section className="mb-2">
          <div className="flex justify-center text-xs text-gray-500 hover:underline dark:text-slate-400">
            <LastCommit />
          </div>
        </section>
        <small className="flex justify-center text-sm font-semibold">
          &copy; 2024, Igmhar Sánchez
        </small>
      </div>
    </footer>
  );
};

export default Footer;
