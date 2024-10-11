import { motion } from 'framer-motion';
const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderTitle = () => {
  return (
    <div>
      <motion.div
        className="flex items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        Hi!
      </motion.div>
      <h1 className="text-slate-600 dark:text-slate-400">
        <motion.span
          className="mb-2 block text-4xl font-bold md:mb-4 md:text-7xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className="font-extrabold text-slate-900 dark:text-slate-50">
            Igmhar
          </strong>{' '}
          <strong className="font-extrabold text-slate-900 dark:text-slate-50">
            Sánchez,
          </strong>
        </motion.span>
        <motion.span
          className="block  text-lg md:text-2xl"
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <strong className="font-bold"> Jr. Software</strong>{' '}
          <strong className="font-bold">Developer</strong> and{' '}
          <strong className="font-bold">Mechatronics Engineer</strong>
        </motion.span>
      </h1>
    </div>
  );
};

export default HeaderTitle;
