import Image from 'next/image';
import { motion } from 'framer-motion';
const HeaderImage = () => {
  return (
    <div>
      <motion.div
        className="absolute right-0 -bottom-54 overflow-hidden"
        initial={{
          opacity: 0,
          x: 64,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 0.4 }}
      >
        <Image
          alt="Igmhar Sánchez"
          src="/me.jpeg"
          width={457}
          height={526}
          className="max-w-none"
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default HeaderImage;
