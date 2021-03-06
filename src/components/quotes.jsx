import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// data
import { quotes } from '../data/quoteWords';

// styles
import styles from '../styles/quotes.module.scss';

const Quotes = () => {
  const [showQuotes, setShowQuotes] = useState('');

  useEffect(() => {
    var quotePosition = 0;

    const delayedQuotes = () => {
      setShowQuotes(quotes[quotePosition].text);

      quotePosition++;

      if (quotePosition < quotes.length) {
        const quoteTimeout = setTimeout(delayedQuotes, 5000);
        return () => clearTimeout(quoteTimeout);
      }
    };

    delayedQuotes();
  }, []);

  return (
    <motion.div
      className={styles.quotes}
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={{
        pageInitial: {
          opacity: 0,
          scale: 0,
        },
        pageAnimate: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1,
            duration: 0.6,
          },
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      <motion.div className={styles.back__home}>
        <Link to='/'>
          <motion.button
            className={styles.quotes}
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
              pageInitial: {
                opacity: 0,
                scale: 0,
              },
              pageAnimate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 1.95,
                  duration: 0.6,
                },
              },
              pageExit: {
                opacity: 0,
              },
            }}
          >
            <FiArrowLeft />
          </motion.button>
        </Link>
      </motion.div>

      <motion.div className={styles.quotes__box}>
        <motion.div className={styles.quote__mark}>
          <motion.h2
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
              pageInitial: {
                opacity: 0,
                scale: 0,
              },
              pageAnimate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 1.8,
                  duration: 0.6,
                },
              },
              pageExit: {
                opacity: 0,
              },
            }}
          >
            "
          </motion.h2>
        </motion.div>
        <motion.p
          variants={{
            initial: {
              y: 60,
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 1.6,
              },
            },
          }}
          initial='initial'
          animate='animate'
        >
          {showQuotes}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Quotes;
