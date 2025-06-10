import { Link, NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">{'<'}</NavLink>
    </nav>
  );
}

export default PageNav;
