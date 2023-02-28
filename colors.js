// Colors for dark mode and light mode
// Reminder: This is not a stylesheet!

import { Appearance } from 'react-native'


export const lightColors = {
  text: '#663300',
  background: '#99ffff',
}

export const darkColors = {
  //background: "#2f363c",
  text: '#99ffff',
  background: '#663300',
}

export const colors = Appearance.getColorScheme() === 'dark' ? darkColors: lightColors
