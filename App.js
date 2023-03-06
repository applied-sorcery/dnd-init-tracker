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
import ManageFighters from "./src/components/ManageFightes.js"
import { lightColors, darkColors } from './Styles.js'
import Styles from './Styles.js'
import { ThisIsAContext } from "./src/components/ThisIsAContext.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setState] = useState();
  
  const colorScheme = useColorScheme()
  const colors = colorScheme === 'dark' ? darkColors : lightColors

  const storeData = async (value) => {
    if(value) {
      try {
        await AsyncStorage.setItem('@globalState', value)
      } catch (e) {
        console.log("error storing---> ", e);
      }
      console.log('Done writing global state.')
    } else {console.log('There was no value.')}
    
  } 

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@globalState')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  //- This sets the global state for the app with dummy data. 
  //- The dummy state consists of one previously saved combat with id: 1, 
  // name: "my combat" as well as the current combat object
  //- In the future this will come from async storage pulling the latest saved data.

  //   Global State Schema/ Dummy Data
  // {
  //   savedCombats: [
  //     {
  //       id: 1,
  //       name: "my combat",
  //       fighters: [
  //         { name: "fighter-1", initScore: 2, id: 1 },
  //         { name: "fighter-2", initScore: 3, id: 2 },
  //       ],
  //       round: 0,
  //       whoseTurn: 0,
  //     }
  //   ],
  //   combatObject: {
  //     id: 0,
  //     name: "",
  //     whoseTurn: 0,
  //     fighters: [],
  //     round: 0,
  //   }
  // }
  
  useEffect( () => {
    storeData(JSON.stringify(state));
    console.log("storing data")
  });

//Effect to load the data into state
// the first time you go to load data the response is null
// so as is, the state gets set to null. 
    useEffect(() => {
      getData().then(result=> {
        if(result === null){
          console.log("how about do nothing");
          setState({
            savedCombats: [],
            combatObject: {
              id: 0,
              name: "initial combat obj",
              whoseTurn: 0,
              fighters: [],
              round: 0,
            },
            savedFighters: [],
            savedGroups: [],
          })
          } else {
            console.log("loading data")
          setState(result)
        }
      })
    }, []);

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
            <Stack.Screen name="Manage Fighters" component={ManageFighters} />
            <Stack.Screen name="Combat Container" component={CombatContainer} />
          </Stack.Navigator>
        </NavigationContainer>
        </ThisIsAContext.Provider>
      </View>
    </>
  );
};

export default App;
