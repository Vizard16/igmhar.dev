import TechSlider from '../TechSlider';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderTechStack = () => {
  return (
    <div className="mt-20 lg:mt-12">
      <motion.p
        className="mb-2.5 text-sm text-gray-600 dark:text-slate-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Tech stack I work with:
      </motion.p>
      {/* Carousel Container */}
      <motion.div
        className="-mt-[10%] md:mt-0"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.8 }} // You can adjust the delay and timing for a smoother entrance
      >
        <TechSlider />
      </motion.div>
    </div>
  );
};

export default HeaderTechStack;
