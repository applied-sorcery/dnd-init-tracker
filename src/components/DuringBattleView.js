import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FighterList from "./FighterList";

import Styles from "../../Style";

const DuringBattleView = ({
  setRound,
  onNextPress,
  onResetPress,
  renderFighterListItem,
  combatObject,
  onAddFighterPress,
}) => (
  <>
    <Text style={Styles.defaultText}>{"Round: " + combatObject.round}</Text>
    <FighterList
      renderFighterListItem={renderFighterListItem}
      combatObject={combatObject}
      onAddFighterPress={onAddFighterPress}
    />
    <View style={Styles.buttonMenu}>
      <TouchableOpacity onPress={onNextPress}>
        <Text style={Styles.button}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onResetPress}>
        <Text style={Styles.button}>RESET</Text>
      </TouchableOpacity>
    </View>
  </>
);

export default DuringBattleView;
