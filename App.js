import {
  View,
  Text,
  useColorScheme,
  StatusBar,
} from "react-native";

import React from "react";
import CombatContainer from "./src/components/CombatContainer.js";
import MainMenu from "./src/components/MainMenu.js";
import { Provider as StateProvider } from "react-redux";
import store from "./src/redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoadCombatView from "./src/components/LoadCombatView.js";
import { lightColors, darkColors } from './Style.js'

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme()
  const colors = colorScheme === 'dark' ? darkColors : lightColors

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main Menu"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main Menu" component={MainMenu} />
          <Stack.Screen name="Load Combat" component={LoadCombatView} />
          <Stack.Screen name="Combat Container" component={CombatContainer} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default App;
