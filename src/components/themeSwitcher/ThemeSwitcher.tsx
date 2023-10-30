import React, { useState } from 'react';
import styles from './ThemeSwitcher.module.css';
import cn from 'classnames'


interface IThemeSwitcher {
  onClick: (value: boolean) => void;
  isGlobalNightMode: boolean
}
const ThemeSwitcher = ({ onClick, isGlobalNightMode }: IThemeSwitcher): JSX.Element => {
  const [toggled, setToggled] = useState(isGlobalNightMode);
  const handleSwitch = () => {
    setToggled(prevValue => !prevValue)
    onClick(toggled)
  }

  return (
    <div onClick={handleSwitch} className={cn(styles.toggle, isGlobalNightMode && styles.night)}>
      <div className={styles.sunMoon}>
        <div className={styles.crater} />
        <div className={styles.crater} />
      </div>
      <div>
        <div className={`${styles.shape} ${styles.sm}`} />
        <div id='nightShape' className={`${styles.shape} ${styles.sm}`} />
        <div className={`${styles.shape} ${styles.sm}`} />
        <div className={`${styles.shape} ${styles.md}`} />
        <div className={`${styles.shape} ${styles.lg}`} />
      </div>
    </div>
  )
}
export default ThemeSwitcher
