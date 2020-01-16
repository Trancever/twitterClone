import React from 'react';

type PreferencesContextType = {
  theme: 'light' | 'dark';
  rtl: 'left' | 'right';
  toggleTheme: () => void;
  toggleRTL: () => void;
};

export const PreferencesContext = React.createContext<PreferencesContextType>({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
});
