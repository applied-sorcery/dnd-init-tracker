import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";
import { CtrlBtn } from "./CustomCore.js";

const ControlButtons = ({
  onClearPress,
  currentView,
  onSaveCombatPress,
  onLoadCombatPress,
}) => (
  <>
    {/* Just let all the buttons render for now */}
    <View style={Styles.controlButtonRow}>
      <CtrlBtn onPress={onClearPress}>Clear</CtrlBtn>
      <CtrlBtn onPress={onSaveCombatPress}>Save</CtrlBtn>
      <CtrlBtn onPress={onLoadCombatPress}>Load</CtrlBtn>
    </View>

    {/*
    <View style={[Styles.controlButtonRow]}>
      {currentView === "DuringBattle" || currentView === "PreBattle" ? (
        <CtrlBtn onPress={onClearPress}>Clear</CtrlBtn>
      ) : (
        ""
      )}
      {currentView !== "LoadCombat" ? (
        <CtrlBtn onPress={onSaveCombatPress}>Save Combat</CtrlBtn>
      ) : (
        ""
      )}
      {currentView !== "LoadCombat" && currentView !== "NewCombat" ? (
        <CtrlBtn onPress={onLoadCombatPress}>Load Combat</CtrlBtn>
      ) : (
        ""
      )}
    </View>
    */}

  </>
);
export default ControlButtons;
