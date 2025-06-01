import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeProvider';

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
