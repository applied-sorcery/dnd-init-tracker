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

export default ListItem;
