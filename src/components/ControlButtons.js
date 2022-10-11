import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";

const ControlButtons = ({
  onSaveCombatPress,
  onLoadCombatPress,
  onMenuPress,
}) => (
  <>
    <View
      style={[Styles.controlButtonRow, { borderColor: "red", borderWidth: 2 }]}
    >
      {/* save, load, add buttons goes here */}
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "10%" }]}
        onPress={() => {}}
      >
        <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
          Add Fighter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.controlButton}
        onPress={onSaveCombatPress}
      >
        <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
          Save Combat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.controlButton}
        onPress={onLoadCombatPress}
      >
        <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
          Load Combat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.controlButton} onPress={onMenuPress}>
        <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  </>
);
export default ControlButtons;
