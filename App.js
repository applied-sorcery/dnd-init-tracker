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

import CombatView from "./src/components/CombatView.js";
import InfoView from "./src/components/InfoView.js";
import { Provider as StateProvider } from "react-redux";
import store from "./src/redux/store";
import Styles from "./Style.js";

const App = () => {
  return (
    <StateProvider store={store}>
      <CombatView />
    </StateProvider>
  );
};

export default App;
