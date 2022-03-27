import Sound from 'react-sound';
import { FiMusic } from 'react-icons/fi';

// styles
import styles from '../styles/navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h3>oreo.</h3>

      <div className={styles.sound__container}>
        <button>
          <FiMusic />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
