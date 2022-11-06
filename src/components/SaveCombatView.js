import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Styles from "../../Style";
import { AppButton, Confirm, AppTextInput, Header } from "./CustomCore.js";

const SaveCombatView = ({
  combatObject,
  showSaveCombatView,
  setShowSaveCombatView,
  onConfirmSaveCombat,
}) => {
  const [combatName, setCombatName] = useState(combatObject.name);

  return (
    <Confirm
      visible={showSaveCombatView}
      onRequestClose={() => {
        setShowSaveCombatView(false);
      }}
      onConfirm={() => {
        onConfirmSaveCombat(combatName);
      }}
      confirmText="Save"
    >
      <Header>Save Combat</Header>
      <AppTextInput
        placeholder={"enter combat name"}
        onChangeText={(text) => setCombatName(text)}
      />
    </Confirm>
  ); //return
}; //SaveCombatView

export default SaveCombatView;
