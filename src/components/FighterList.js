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
const FighterList = ({ combatObject }) => {
  //used by FlatList in <FighterList />
  const renderFighterListItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        myTurn={
          combatObject.fighters.indexOf(item) == combatObject.whoseTurn &&
          combatObject.battlePhase != "preBattle"
            ? true
            : false
        }
      />
    );
  };

  return (
    <View style={Styles.listArea}>
      <FlatList
        data={combatObject.fighters}
        renderItem={renderFighterListItem}
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
