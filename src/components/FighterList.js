import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { PlusButton, AppButton, AppText } from "./CustomCore.js";

import Styles from "../../Styles";
import { ThisIsAContext } from "./ThisIsAContext.js";

const FighterList = ({ onAddFighterPress }) => {
  const {state, setState} = useContext(ThisIsAContext);
  const FighterListItem = ({ item }) => {
    return (
      <View style={
        (state.combatObject.fighters.indexOf(item) === state.combatObject.whoseTurn) ?
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
        height: 200,
      }]}>
      <FlatList
        contentContainerStyle={{
       
        }}
        data={state.combatObject.fighters}
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
