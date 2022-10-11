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

//once the battle has started, display these things:
//  --round number
//  --fighter list
//  --Next button
//  --Reset button

const DuringBattleView = ({
  setRound,
  onNextPress,
  onResetPress,
  renderFighterListItem,
  combatObject,
}) => (
  <>
    <Text style={Styles.defaultText}>{"Round: " + combatObject.round}</Text>
    <FighterList
      renderFighterListItem={renderFighterListItem}
      combatObject={combatObject}
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
