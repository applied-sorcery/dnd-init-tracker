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
    fontSize: 20,
    letterSpacing: 1.2,
    // borderColor: "#a5a0a0",
    // borderWidth: 2,
    margin: "5%",
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  plusIcon: {},
  addingName: { marginRight: 0, height: "50%", marginTop: 0 },
  addingInit: { marginRight: 0, height: "10%", marginBotton: 0 },

  someOptionsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    margin: 0,
    padding: 0,
    borderColor: "purple",
    borderWidth: 2,
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
    margin: 10,
    borderWidth: 2,
    borderColor: "darkgray",
  },
});

export default Styles;
