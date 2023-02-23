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


const FighterList = ({ combatObject, onAddFighterPress }) => {
  const FighterListItem = ({ item }) => {
    return (
      <View style={
        (combatObject.fighters.indexOf(item) === combatObject.whoseTurn) ?
          [Styles.fighterListItem, Styles.highlightFighter]
          : Styles.fighterListItem
      }>
        <AppText style={{marginRight: 18}}>[ init: {item.initScore} ]</AppText>
        <AppText>{item.name}</AppText>
      </View>
    );
  };

  return (
    <>
    <View style={
      [Styles.fighterListWrapper, {
        borderWidth: 0,
        borderColor: '#fff',
        height: 200,
      }]}>
      <FlatList
        style={{
          borderWidth: 1,
          borderColor: '#fff',
        }}
        contentContainerStyle={{
          // pushes list items to bottom, but flex breaks scrolling
          //flex: 1,
          //justifyContent: 'flex-end',
        }}
        data={combatObject.fighters}
        renderItem={FighterListItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{
            alignItems: "center",
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
