import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
  button: {
    flex: 1 / 3,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#a5a0a0",
    fontSize: 16,
    margin: "1%",
    letterSpacing: 1,
    borderRadius: 2,
    borderColor: "#a5a0a0",
    borderWidth: 1,
  },
  /* Wrapper for the entire screen */
  container: {
    backgroundColor: "#2f363c",
    //minHeight: '100%',
    flex: 1,
    paddingTop: 30,
  },
  safeArea: {
    height: 30,
  },
  searchView: {
    paddingRight: 15,
    flexDirection: "row",
    borderWidth: 4,
    borderColor: Colors.redAccent,
    height: 64,
    borderRadius: 35,
    alignItems: "center",
  },
  /*
  listArea: {
    flex: 3,
    // borderWidth: 4,
    // borderColor: "white",
  },
  */
  ListItemText: { color: "#c85c5c" },
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    padding: 10,
    color: "#a5a0a0",
  },
  defaultText: {
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 20,
    letterSpacing: 1.2,
    // borderColor: "#a5a0a0",
    // borderWidth: 2,
    margin: "5%",
  },

  controlButtonRow: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //flex: 1,
    //alignContent: "center",
    //height: "12%",
    //maxWidt: "10%",
    //marginLeft: 10,
    //marginBottom: 10,
    //padding: 0,
    // borderColor: "purple",
    // borderWidth: 2,
  },

  buttonMenu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 2,
    // borderColor: "cornflowerblue",
  },
  controlButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 5,
  },
  combatMenu: {
    flex: 1,
    flexDirection: "column",
    maxHeight: "70%",
    minHeight: "70%",
    // borderWidth: 2,
    borderColor: "red",
  },
  someButtonsColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "100%",

    // borderWidth: 2,
    borderColor: "limegreen",
  },

  fighterListWrapper: {
    marginTop: 50,
    marginBottom: 50,
    height: 200,
    // todo: calculate height of 5 list items
  },

});

export default Styles;
