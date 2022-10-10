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

  container: {
    backgroundColor: "#2f363c",
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 3,
    // borderStyle: 'solid',
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
  listArea: {
    flex: 3,
    // borderWidth: 4,
    // borderColor: "white",
  },
  ListItemText: { color: "#c85c5c" },
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    padding: 10,
    color: "white",
  },
  defaultText: {
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 25,
    letterSpacing: 1.2,
    // borderColor: "#a5a0a0",
    // borderWidth: 2,
    margin: "5%",
  },

  extraLargeText: {
    alignSelf: "center",
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 25,
    margin: "0%",
    padding: "5%",
    letterSpacing: 1.2,
    // borderColor: "#a5a0a0",
    // borderWidth: 2,
    width: "25%",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  plusIcon: {},
  addingName: { marginRight: 0, height: "50%", marginTop: 0 },
  addingInit: { marginRight: 0, height: "10%", marginBotton: 0 },

  someOptionsRow: {
    flex: 1 / 9,
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    // borderColor: "#a5a0a0",
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
});

export default Styles;
