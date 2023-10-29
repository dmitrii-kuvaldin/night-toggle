import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'
import styles from './Header.module.css';

interface HomeworkPageProps {
  onClick: () => void
  isGlobalNightMode: boolean
}

const Header: FC<HomeworkPageProps> = ({ onClick, isGlobalNightMode }) => {

  console.log('isGlobalNightMode', isGlobalNightMode);
  return (
    <div className={cn(styles.navbar, isGlobalNightMode && styles.nightMode)}>
      {/* в аттрибуте 'to' мы указываем тот же путь, что и в Route для соответствующего компонента */}
      <NavLink to="/">random activity</NavLink>
      <NavLink to="counter">counter</NavLink>
      <NavLink to="cityPage">cityPage</NavLink>
      <NavLink to="sandwich">sandwich</NavLink>
      <NavLink to="btnTest">btnTest</NavLink>
      <NavLink to="parent">parent</NavLink>
      <NavLink to="dogCard">dogCard</NavLink>
    </div>
  );
};

export default Header;

