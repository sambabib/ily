import { useState, useEffect } from 'react';

// styles
import styles from '../styles/hi.module.scss';

const Hi = ({ stopScroll }) => {
  const [animateScroll, setAnimateScroll] = useState(false);

  useEffect(() => {
    const animateTimer = setTimeout(() => {
      setAnimateScroll(true);
    }, 1000);

    return () => clearTimeout(animateTimer);
  }, []);

  return (
    <>
      {animateScroll && (
        <div className={styles.hi}>
          <div className={styles.hi__container}>
            <p>hi baby! it&lsquo;s baby. i love you.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Hi;
