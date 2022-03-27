import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Stagger } from '../animation/animation';

// styles
import styles from '../styles/preloader.module.scss';

// data
import { intro } from '../data/introWords';

const PreLoader = () => {
  const [introText, setIntroText] = useState('');

  useEffect(() => {
    var variablePosition = 0;

    const delayedOutput = () => {
      setIntroText(intro[variablePosition].text);

      variablePosition++;

      if (variablePosition < intro.length) {
        const timeout = setTimeout(delayedOutput, 1500);
        return () => clearTimeout(timeout);
      }
    };

    delayedOutput();
  }, []);

  return (
    <motion.div className={styles.preloader} variants={Stagger}>
      <div className={styles.spinner}>
        <span></span>
      </div>
      <motion.p exit={{ opacity: 0 }}>{introText}</motion.p>
    </motion.div>
  );
};

export default PreLoader;
