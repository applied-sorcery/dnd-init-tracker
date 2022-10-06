import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 16,
    margin: "1%",
    letterSpacing: 1,
    lineHeight: 20,
    borderRadius: 2,
    borderColor: "#a5a0a0",
    borderWidth: 1,
    padding: 5,
    width: "55%",
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
    // borderColor: 'white',
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
    margin: "20%",
    letterSpacing: 1.2,
    lineHeight: 40,
  },

  extraLargeText: {
    alignSelf: "center",
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 25,
    margin: "0%",
    padding: "5%",
    letterSpacing: 1.2,
    borderColor: "#a5a0a0",
    borderWidth: 2,
    width: "25%",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Styles;
