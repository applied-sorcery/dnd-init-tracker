import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
//import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon from "react-native-vector-icons/MaterialIcons";
//import Icon from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const ListItem = ({ item, addItem, removeItem, onInfoPress, myTurn }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={myTurn ? styles.listItemViewMyTurn : styles.listItemView}>
        <Text style={styles.listItemText}>{item.name} </Text>
        <View style={styles.right}>
          <TouchableOpacity style={styles.infoIcon}>
            <Icon
              name="info"
              size={18}
              color="#fff"
              onPress={() => onInfoPress(item.id)}
            />
          </TouchableOpacity>
          <View style={styles.qtyView}>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Icon name="remove" size={18} color="#c85c5c" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, color: "#fff", marginHorizontal: 12 }}>
              {item.quantity}
            </Text>
            <TouchableOpacity onPress={() => addItem(item.id)}>
              <Icon name="add" size={18} color="#c85c5c" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    backgroundColor: "#2f363c",
    // borderWidth: 4,
    // borderColor: 'blue',
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  listItemViewMyTurn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "green",
  },
  infoIcon: {
    margin: 3,
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  listItemText: { fontSize: 22, color: "#AAA" },
  qtyView: { flexDirection: "row", alignItems: "center" },
});

export default ListItem;
