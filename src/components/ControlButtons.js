import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";
import {CtrlBtn} from './CustomCore.js';

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
      {/* save, load, add buttons goes here */}
      {currentView == "DuringBattle" || currentView == "PreBattle" ? (
        // Change to CtrlBtn
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "10%" }]}
          onPress={onClearPress}
        >
          <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
            Clear
          </Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
      {currentView == "LoadCombat" ? (
        ""
      ) : (
        <CtrlBtn
          onPress={onAddFighterPress}
        >
          Add Fighter
        </CtrlBtn>
      )}
      {currentView !== "LoadCombat" ? (
        // Change to CtrlBtn
        <TouchableOpacity
          style={Styles.controlButton}
          onPress={onSaveCombatPress}
        >
          <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
            Save Combat
          </Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
      {currentView !== "LoadCombat" && currentView !== "NewCombat" ? (
        // Change to CtrlBtn
        <TouchableOpacity
          style={Styles.controlButton}
          onPress={onLoadCombatPress}
        >
          <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
            Load Combat
          </Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
      {/* Change to CtrlBtn */}
      <TouchableOpacity
        style={Styles.controlButton}
        onPress={
          currentView === "LoadCombat" && combatObject.fighters.length !== 0
            ? onBackPress
            : onMenuPress
        }
      >
        <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
          {currentView === "LoadCombat" && combatObject.fighters.length !== 0
            ? "Back"
            : "Menu"}
        </Text>
      </TouchableOpacity>
    </View>
  </>
);
export default ControlButtons;
