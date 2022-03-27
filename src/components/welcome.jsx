import { motion } from 'framer-motion';

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
      <section className={styles.hero}>
        <div className={styles.hero__text}>
          <h3>Hey mama,</h3>
          <p>
            This little web app is a really tiny footnote on Beyonce&lsquo;s
            internet of how much I <strong>absofuckinglutely</strong> love you.
            It's a "soft reminder" (in Ini's voice) of how far we have come &
            where we're headed.
          </p>

          <p>
            It&lsquo;s designed to tell you the many different ways I love &
            adore you everyday. Each day with dfferent meaning.
          </p>

          <button>Whoop! Whoop! (In Ini's voice). Show me baby!</button>
        </div>

        <div className={styles.hero__img}>
          <img src={eiffelTower} alt='eiffel tower' />
        </div>
      </section>
    </motion.div>
  );
};

export default Welcome;
