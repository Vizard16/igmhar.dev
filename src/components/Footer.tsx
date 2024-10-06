import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-t-slate-100 py-8 px-4 text-sm text-gray-900">
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
        <ul className="flex justify-center gap-1 text-xs text-gray-500">
          <li>
            <Link href="/" className="hover:underline">
              Holaa
            </Link>
          </li>
          <li>·</li>
          <li>
            <Link href="/" className="hover:underline">
              Pudiplay
            </Link>
          </li>
        </ul>
      </section>
      <small className="flex justify-center text-sm font-semibold">
        &copy; 2024, Igmhar Sánchez
      </small>
    </footer>
  );
};

export default Footer;
