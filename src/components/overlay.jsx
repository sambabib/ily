import { motion } from 'framer-motion';
import { overlayAnimation } from '../animation/animation';

// styles
import styles from '../styles/overlay.module.scss';

const Overlay = () => {
  return (
    <motion.div
      className={styles.overlay}
      variants={overlayAnimation}
      initial='initial'
      animate='animate'
    ></motion.div>
  );
};

export default Overlay;
