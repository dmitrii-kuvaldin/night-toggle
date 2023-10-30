import styles from './homeworkPage.module.css';
import React, { useState } from 'react';
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

interface HomeworkPageProps {
  onClick: () => void;
  isGlobalNightMode: boolean
}

function HomeworkPage({ onClick, isGlobalNightMode }: HomeworkPageProps) {

  const [toggled, setToggled] = useState(Boolean(localStorage.getItem('globalNightMode')))

  const handleClick = () => {
    setToggled(!toggled);
    onClick()
  }



  return (
    <div className={`${styles.container} ${isGlobalNightMode && styles.night}`}>
      <header className={styles.header}>
        <h1>
          <div className={styles.toggleDiv}>
            <ThemeSwitcher isGlobalNightMode={isGlobalNightMode} onClick={handleClick} />
          </div>
          <span>Homework page</span>
        </h1>
      </header>
      <nav className={styles.navbar}>
      </nav>
    </div>
  );
}

export default HomeworkPage;
