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
    flex: 1,
    paddingTop: 30,
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

  defaultText: {
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 20,
    letterSpacing: 1.2,
    margin: "5%",
  },

  controlButtonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  },
  someButtonsColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "100%",
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
