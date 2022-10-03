/*to-do:
 -add color corresponding to 
 -add navigation drawer
 -add list to combat screen
 -stick a button to the bottom of the "my mobs" list
 -make the "my mobs" list take up 100% of the screen
*/

// import uuid from 'react-native-uuid';
// import ListItem from './components/ListItem.js';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchView from './src/components/SearchView.js';
import HomeView from './src/components/HomeView.js';
import SettingsView from './src/components/SettingsView.js';
import InstructionsView from './src/components/InstructionsView.js';
import MonsterStatsView from './src/components/MonsterStatsView.js';
import CombatView from './src/components/CombatView.js';
import {
  bottomTabNavigator,
  NavigationContainer,
} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as StateProvider} from 'react-redux';
import store from './src/redux/store';
import Styles from './Style.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: Styles.defaultText.color,
            activeBackgroundColor: Styles.container.backgroundColor,
            inactiveBackgroundColor: Styles.container.backgroundColor,
          }}>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Settings" component={SettingsView} />
          <Tab.Screen name="Instructions" component={InstructionsView} />
          <Tab.Screen name="Combat" component={CombatView} />
          <Tab.Screen name="Search" component={SearchView} />
        </Tab.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
