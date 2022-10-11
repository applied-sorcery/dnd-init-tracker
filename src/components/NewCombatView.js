import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";

//this displays when the user presses the new combat button or when
//there are no saved combats to load
const NewCombatView = ({
  onAddFighterPress,
  onSaveCombatPress,
  onMenuPress,
}) => (
  <View style={Styles.combatMenu}>
    <View style={Styles.someButtonsColumn}>
      <Text style={Styles.defaultText}>New Combat:</Text>
      {/* save, load, add buttons goes here */}
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        onPress={onAddFighterPress}
      >
        <Text style={Styles.defaultText}>Add Fighter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSaveCombatPress}
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
      >
        <Text style={Styles.defaultText}>Save Combat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onMenuPress}
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
      >
        <Text style={Styles.defaultText}>Menu</Text>
      </TouchableOpacity>
    </View>
    <Text style={Styles.defaultText}>Recent Fighters:</Text>
  </View>
);

export default NewCombatView;
