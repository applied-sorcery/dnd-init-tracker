import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";

const NewCombatView = ({
  onAddFighterPress,
  onSaveCombatPress,
  onMenuPress,
}) => (
  <View style={Styles.combatMenu}>
    <View style={Styles.someButtonsColumn}>
      <Text style={Styles.defaultText}>New Combat:</Text>
    </View>
    <Text style={Styles.defaultText}>Recent Fighters:</Text>
  </View>
);

export default NewCombatView;
