import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stagger, fadeInUp } from '../animation/animation';

// styles
import styles from '../styles/welcome.module.scss';

// assets
import eiffelTower from '../assets/eiffel-tower.svg';

const Welcome = () => {
  return (
    <motion.div
      className={styles.welcome}
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 1,
          },
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      <motion.section className={styles.hero} variants={stagger}>
        <motion.div className={styles.hero__text}>
          <motion.h3 variants={fadeInUp} initial='initial' animate='animate'>
            Hey mama,
          </motion.h3>
          <motion.p variants={fadeInUp} initial='initial' animate='animate'>
            This little web app is a really tiny footnote on Beyonce&lsquo;s
            internet of how much I <strong>absofuckinglutely</strong> love you.
            It's a "soft reminder" (in Ini's voice) of how far we have come &
            where we're headed.
          </motion.p>

          <motion.p variants={fadeInUp} initial='initial' animate='animate'>
            It&lsquo;s designed to tell you the many different ways I love &
            adore you everyday. Each day with dfferent meaning.
          </motion.p>

          <Link to='/quotes'>
            <motion.button
              variants={fadeInUp}
              initial='initial'
              animate='animate'
            >
              Whoop! Whoop! (In Ini's voice). Show me baby!
            </motion.button>
          </Link>
        </motion.div>

        <motion.div className={styles.hero__img}>
          <motion.img
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
                  delay: 2,
                },
              },
            }}
            initial='initial'
            animate='animate'
            src={eiffelTower}
            alt='eiffel tower'
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Welcome;
