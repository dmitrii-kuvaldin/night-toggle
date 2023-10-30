import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeworkPage from './components/homeworkPage/HomeworkPage';

const App: FC = () => {
  const [isGlobalNightMode, setIsGlobalNightMode] = useState(() => {
    if (localStorage.getItem('globalNightMode') === 'true') {
      document.body.classList.add('night-mode-global');
      return !!localStorage.getItem('globalNightMode')
    } else {
      localStorage.setItem('globalNightMode', 'false')
      return false
    }
  });

  const toggleGlobalNightMode = () => {
    setIsGlobalNightMode((prevIsGlobalNightMode) => {
      const newIsGlobalNightMode = !prevIsGlobalNightMode;
      localStorage.setItem('globalNightMode', newIsGlobalNightMode.toString());
      return newIsGlobalNightMode;
    });
  };

  useEffect(() => {
    if (isGlobalNightMode) {
      document.body.classList.add('night-mode-global');
    } else {
      document.body.classList.remove('night-mode-global');
    }
  }, [isGlobalNightMode]);

  return (
    <Routes>
      <Route path="/night-toggle" element={<Layout isGlobalNightMode={isGlobalNightMode} onClick={toggleGlobalNightMode} />}>
        <Route index element={<HomeworkPage isGlobalNightMode={isGlobalNightMode} onClick={toggleGlobalNightMode} />} />
        <Route path="*" element={<h1>No such page!</h1>} />
      </Route>

    </Routes>
  );
};

export default App;
