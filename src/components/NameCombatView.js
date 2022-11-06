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
import {
  AppButton,
  Confirm,
  AppTextInput,
  Header,
} from "./CustomCore.js"

const NameCombatView = ({
  combatObject,
  showNameCombatView,
  setShowNameCombatView,
  onConfirmSaveCombat,
}) => {
  const [combatName, setCombatName] = useState(combatObject.name);
  return (
    <Confirm
      visible={showNameCombatView}
      onRequestClose={() => {
        setShowNameCombatView(false);
      }}
      onConfirm={() => {
        onConfirmSaveCombat(combatName);
      }}
      confirmText="Save"
    >
      <Header>Save Combat</Header>
      <AppTextInput
        onChangeText={(text) => setCombatName(text)}
      />
    </Confirm>
  ); //return

}; //NameCombatView

export default NameCombatView;
