import Link from 'next/link';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
      <a
        href='https://www.linkedin.com/company/nerdforsch-labs'
        target='_blank'
        className='md:ml-10 flex items-center justify-center sm:p-2 w-12 h-12'
      >
        LinkedIn
      </a>
      <a
        href='https://www.instagram.com/pixelwheel_nfl/'
        target='_blank'
        className='md:ml-10 flex items-center justify-center sm:p-2 w-12 h-12'
      >
        Instagram
      </a>
      <a
        href='https://www.facebook.com/profile.php?id=61553184518919&sk=about'
        target='_blank'
        className='md:ml-10 flex items-center justify-center sm:p-2 w-12 h-12'
      >
        Facebook
      </a>
    </div>
  );
}
