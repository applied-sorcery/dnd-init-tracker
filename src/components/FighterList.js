import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { PlusButton, AppButton, AppText } from "./CustomCore.js";

import ListItem from "./ListItem";
import Styles from "../../Style";

//this is the list of added/ready fighters. it can be populated manually or
// by loading groups/individuals
const FighterList = ({ combatObject, onAddFighterPress }) => {
  //used by FlatList in <FighterList />
  const FighterListItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        myTurn={combatObject.fighters.indexOf(item) === combatObject.whoseTurn}
      />
    );
  };

  return (
    <>
    {/*<View style={Styles.listArea}>*/}
    <View style={
      [Styles.fighterListWrapper, {
        borderWidth: 0,
        borderColor: '#fff',
        //height: 200,
      }]}>
      <FlatList
        style={{
          borderWidth: 1,
          borderColor: '#fff',
          height: 200,
        }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        data={combatObject.fighters}
        renderItem={FighterListItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{
            //alignItems: "center",
            borderWidth: 1,
            borderColor: '#fff',
          }}>
            <AppText>{"Press (+) to add a fighter"}</AppText>
          </View>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>

    <View style={{ alignItems: "center" }}>
      <PlusButton onPress={onAddFighterPress}></PlusButton>
    </View>
    </>
  );
}; // FighterList

export default FighterList;
