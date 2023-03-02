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
    borderWidth: 1,
    borderColor: colors.text,
    marginTop: 50,
    marginBottom: 50,
    height: 200,
    // todo: calculate height of 5 list items
  },

  fighterListItem: {
    flexDirection:'row',
    marginLeft: 10,
    borderColor: "yellow", 
    borderWidth: 0
  },

  highlightFighter: {
    backgroundColor: colors.highlight,
  },

  editStatusBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusIcon: {
    marginLeft: 50,
  },

  pressedStatusIcon: {
    marginLeft: 50,
    opacity: .4,
  },

  statusRow: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
  },

  statusSearch: {
      flex: 1/2,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      borderColor: colors.highlight,
      borderWidth: 1,
  },

  searchInput: {
    width: "75%",
    alignSelf: "center",
    justifyContent: "center",
    borderColor: colors.highlight,
    borderWidth: 1,
  }

});



export default Styles;
