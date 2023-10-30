import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'
import styles from './Header.module.css';

interface HomeworkPageProps {
  onClick: () => void
  isGlobalNightMode: boolean
}

const Header: FC<HomeworkPageProps> = ({ onClick, isGlobalNightMode }) => {

  return (
    <div className={cn(styles.navbar, isGlobalNightMode && styles.nightMode)}>
      <NavLink to="/night-toggle">Home page</NavLink>
    </div>
  );
};

export default Header;

