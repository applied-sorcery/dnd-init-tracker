import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListItem from "./ListItem";
import Styles from "../../Style";

//this is the list of added/ready fighters. it can be populated manually or
// by loading groups/individuals
const FighterList = ({ combatObject, currentView }) => {
  //used by FlatList in <FighterList />
  const FighterListItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        myTurn={
          combatObject.fighters.indexOf(item) === combatObject.whoseTurn &&
          currentView != "PreBattle"
        }
      />
    );
  };

  return (
    <View style={Styles.listArea}>
      <FlatList
        data={combatObject.fighters}
        renderItem={FighterListItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={Styles.defaultText}>{"<no mobs yet>"}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default FighterList;
