import { StyleSheet, Appearance } from "react-native";
//import Colors from "./Colors";
//import { lightColors, darkColors } from './colors'
import { colors } from './colors'


const Styles = StyleSheet.create({

  /* Wrapper for the entire screen */
  container: {
    //backgroundColor: "#2f363c",
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: 30,
  },

  controlButtonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  mainMenuButton: {
    width: 165,
    marginBottom: 25,
  },

  fighterListWrapper: {
    marginTop: 50,
    marginBottom: 50,
    height: 200,
    // todo: calculate height of 5 list items
  },

  fighterListItem: {
    flexDirection:'row',
    marginLeft: 10,
  },

  highlightFighter: {
    backgroundColor: '#000',
  },

});

export default Styles;
