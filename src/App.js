import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

// components
import PreLoader from './components/preloader';
import Overlay from './components/overlay';
import Hi from './components/hi';
import Welcome from './components/welcome';
import Cursor from './components/cursor';
import Navbar from './components/navbar';
import Quotes from './components/quotes';

// assets
import beach from './assets/beach.mp4';

// styles
import styles from './styles/app.module.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [stopScroll, setStopScroll] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    const killScroll = setTimeout(() => {
      setStopScroll(true);
    }, 17000);

    return () => clearTimeout(loadingTimer, killScroll);
  }, [loading]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <div className={styles.app}>
            <div className={styles.preloader}>
              <PreLoader />
            </div>

            <div className={styles.bg__video}>
              <video autoPlay loop muted>
                <source src={beach} />
              </video>
            </div>
          </div>
        ) : (
          <motion.div className={styles.app}>
            <Overlay />
            {!stopScroll ? (
              <Hi />
            ) : (
              <>
                <Overlay />
                <Cursor />
                <Navbar />
                <Routes>
                  <Route path='/' element={<Welcome />} />
                  <Route path='quotes' element={<Quotes />} />
                </Routes>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
