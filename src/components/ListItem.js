import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppText } from "./CustomCore"

const ListItem = ({item, myTurn}) => {
  return (
    <View>
      <AppText>{item.name}</AppText>
      <AppText>{item.initScore && "init: " + item.initScore}</AppText>
    </View>
  )
}

const ListItemOld = ({ item, myTurn, onPress }) => {
//const ListItem = (props) => {
  return (
    //<Text>List Item</Text>
    <TouchableOpacity onPress={onPress ? () => onPress(item) : null}>
      {/*<View style={myTurn ? styles.listItemViewMyTurn : styles.listItemView}>}*/}
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.name}</Text>
        <Text style={[styles.listItemText]}>
          {item.initScore ? "init: " + item.initScore : ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  listItemView: {
    flexDirection: "row",
    //justifyContent: "flex-start",
    //alignItems: "center",
    //padding: 4, //added so border won't make it jump when it's "my turn"
  },

  listItemViewMyTurn: {
    //flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "center",
    //borderWidth: 4,
    //borderColor: "green",
  },

  listItemText: { 
    flex: 1,
    fontSize: 24,
    marginBottom: 10,
  },

});

export default ListItem;
