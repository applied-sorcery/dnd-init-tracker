/*to-do:
 -add color corresponding to 
 -add navigation drawer
 -add list to combat screen
 -stick a button to the bottom of the "my mobs" list
 -make the "my mobs" list take up 100% of the screen
*/

// import uuid from 'react-native-uuid';
// import ListItem from './components/ListItem.js';
//import Icon from 'react-native-vector-icons/dist/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from '@expo/vector-icons/MaterialIcons';
import { View, Text } from "react-native";
import React from "react";
import CombatContainer from "./src/components/CombatContainer.js";
import MainMenu from "./src/components/MainMenu.js";
import InfoView from "./src/components/InfoView.js";
import { Provider as StateProvider } from "react-redux";
import store from "./src/redux/store";
import Styles from "./Style.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SavedCombatList from "./src/components/SavedCombatList.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <StateProvider store={store}>
    // <CombatContainer />
    // <MainMenu />
    // </StateProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main Menu"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="SavedCombats" component={SavedCombatList} />
        <Stack.Screen name="CombatContainer" component={CombatContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
