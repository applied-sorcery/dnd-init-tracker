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
  onBackPress,
  onAddFighterPress,
  onSaveCombatPress,
  onLoadCombatPress,
  onMenuPress,
  combatObject,
}) => (
  <>
    <View style={[Styles.controlButtonRow]}>
      {currentView == "DuringBattle" || currentView == "PreBattle" ? (
        // Change to CtrlBtn
        <CtrlBtn onPress={onClearPress}>Clear</CtrlBtn>
      ) : (
        ""
      )}
      {currentView == "LoadCombat" ? (
        ""
      ) : (
        <CtrlBtn onPress={onAddFighterPress}>Add Fighter</CtrlBtn>
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
      <CtrlBtn
        onPress={
          currentView === "LoadCombat" && combatObject.fighters.length !== 0
            ? onBackPress
            : onMenuPress
        }
      >
        {currentView === "LoadCombat" && combatObject.fighters.length !== 0
          ? "Back"
          : "Menu"}
      </CtrlBtn>
    </View>
  </>
);
export default ControlButtons;
