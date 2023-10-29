import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeworkPage from './components/homeworkPage/HomeworkPage';

const App: FC = () => {
  const [isGlobalNightMode, setIsGlobalNightMode] = useState(() => {
    console.log("в сторадже лижит", localStorage.getItem('globalNightMode'));
    console.log("в сторадже лижит в беловом", !!localStorage.getItem('globalNightMode'));
    if (localStorage.getItem('globalNightMode') === 'true') {
      console.log("в сторадже все еще лижит", localStorage.getItem('globalNightMode'));
      console.log('есть сторадж', !!localStorage.getItem('globalNightMode'));
      document.body.classList.add('night-mode-global');
      return !!localStorage.getItem('globalNightMode')
    } else {
      console.log('нет сторадж', false);
      localStorage.setItem('globalNightMode', 'false')
      return false
    }
  });

  // Toggle global night mode
  const toggleGlobalNightMode = () => {
    console.log('переключили стили');
    setIsGlobalNightMode((prevIsGlobalNightMode) => {
      const newIsGlobalNightMode = !prevIsGlobalNightMode;
      // Save the state to local storage
      localStorage.setItem('globalNightMode', newIsGlobalNightMode.toString());
      return newIsGlobalNightMode;
    });
  };

  useEffect(() => {
    // Apply or remove the global night mode class to the 'body' element
    if (isGlobalNightMode) {
      console.log('поставили night-mode-global');
      document.body.classList.add('night-mode-global');
    } else {
      console.log('убрали night-mode-global');
      document.body.classList.remove('night-mode-global');
    }
  }, [isGlobalNightMode]);

  return (
    <Routes>
      <Route path="/" element={<Layout isGlobalNightMode={isGlobalNightMode} onClick={toggleGlobalNightMode} />}>
        <Route index element={<HomeworkPage isGlobalNightMode={isGlobalNightMode} onClick={toggleGlobalNightMode} />} />
      </Route>
    </Routes>
  );
};

export default App;
