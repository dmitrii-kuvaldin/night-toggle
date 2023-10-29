import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
// import cn from 'classnames'
import styles from './Layout.module.css';
import Footer from '../components/footer/Footer';

interface HomeworkPageProps {
  onClick: () => void;
  isGlobalNightMode:boolean
}

const Layout: FC<HomeworkPageProps> = ({ onClick,isGlobalNightMode }) => (
  <div className={styles.container}>
    <Header onClick={onClick} isGlobalNightMode={isGlobalNightMode} />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
