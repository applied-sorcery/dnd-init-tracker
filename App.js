import {
  View,
  Text,
  useColorScheme,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import CombatContainer from "./src/components/CombatContainer.js";
import MainMenu from "./src/components/MainMenu.js";
import { Provider as StateProvider } from "react-redux";
import store from "./src/redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoadCombatView from "./src/components/LoadCombatView.js";
import { lightColors, darkColors } from './Style.js'
import { ThisIsAContext } from "./src/components/ThisIsAContext.js";

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme()
  const colors = colorScheme === 'dark' ? darkColors : lightColors

  
      


  //- This sets the global state for the app with dummy data. 
  //- The dummy state consists of one previously saved combat with id: 1, 
  // name: "my combat" as well as the current combat object
  //- In the future this will come from async storage pulling the latest saved data.
  const [state, setState] = useState({
    savedCombats: [
      {
        id: 1,
        name: "my combat",
        fighters: [
          { name: "fighter-1", initScore: 2, id: 1 },
          { name: "fighter-2", initScore: 3, id: 2 },
        ],
        round: 0,
        whoseTurn: 0,
      }
    ],
    combatObject: {
      id: 0,
      name: "",
      whoseTurn: 0,
      fighters: [],
      round: 0,
    }
  });
  
  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <View style={Styles.container}>
        <ThisIsAContext.Provider value={{ state, setState }}>
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
        </ThisIsAContext.Provider>
      </View>
    </>
  );
};

export default App;
