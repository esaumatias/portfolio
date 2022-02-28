import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <AppContext.Provider
      value={ {
        lightMode,
        setLightMode,
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;