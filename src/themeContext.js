/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
};
export const ThemeContext = React.createContext(theme.dark);
