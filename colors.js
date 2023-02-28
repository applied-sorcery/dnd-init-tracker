// Colors for dark mode and light mode
// Reminder: This is not a stylesheet!

import { Appearance } from 'react-native'


export const lightColors = {
  text: '#000',
  background: '#fff',
}

export const darkColors = {
  //background: "#2f363c",
  text: '#33ff33',
  background: '#333',
}

export const colors = Appearance.getColorScheme() === 'dark' ? darkColors: lightColors
