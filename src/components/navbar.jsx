import { useState } from 'react';
import Sound from 'react-sound';
import { FiMusic, FiArrowRight } from 'react-icons/fi';

// assets
import whipped from '../assets/whipped.mp3';

// styles
import styles from '../styles/navbar.module.scss';

const Navbar = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.navbar}>
      <h3>oreo.</h3>

      <div className={styles.sound__container}>
        <div className={styles.press__play}>
          <p>press play</p>
          <FiArrowRight className={styles.arrow} />
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          <FiMusic className={styles.music} />
        </button>

        <Sound
          url={whipped}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          onLoading={handleSongLoading}
          onPlaying={handleSongPlaying}
          onFinishedPlaying={handleSongFinishedPlaying}
          loop={true}
          volume={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
