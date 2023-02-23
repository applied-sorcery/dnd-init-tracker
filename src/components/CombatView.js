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

    <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
      <View
        style={Styles.controlButtonRow}>
        <CtrlBtn onPress={onStartPress}>START</CtrlBtn>
        <CtrlBtn onPress={onNextPress}>NEXT</CtrlBtn>
        <CtrlBtn onPress={onResetPress}>RESET</CtrlBtn>
      </View>
    </View>

  </>

); // CombatView
export default CombatView;
