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
import { CtrlBtn } from './CustomCore'

//if there are no saved combats, assume it's a new combat, display new combat view
//if there are saved combats, then we will display a Combat Menu with options: Load or New Combat
//once there are SOME fighters in the list, the start button appears.

const CombatView = ({
  renderFighterListItem,
  combatObject,
  onStartPress,
  onAddFighterPress,
  setRound,
  onNextPress,
  onResetPress,
}) => (

  <>

    <FighterList
      renderFighterListItem={renderFighterListItem}
      combatObject={combatObject}
      currentView={"PreBattle"}
      onAddFighterPress={onAddFighterPress}
    />

    <View style={Styles.controlButtonRow}>
      <CtrlBtn onPress={onStartPress}>START</CtrlBtn>
      <CtrlBtn onPress={onNextPress}>NEXT</CtrlBtn>
      <CtrlBtn onPress={onResetPress}>RESET</CtrlBtn>
    </View>

  </>

); // CombatView
export default CombatView;
