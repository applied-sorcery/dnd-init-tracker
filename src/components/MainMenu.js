import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";

const MainMenu = ({
  onNewCombatPress,
  fighters,
  navigation,
}) => (
  <View style={Styles.combatMenu}>
    <View style={Styles.someButtonsColumn}>
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        onPress={() => {
          navigation.navigate("Combat Container");
        }}
      >
        <Text style={Styles.defaultText}>NEW COMBAT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        onPress={() => {
          navigation.navigate("Load Combat");
        }}
      >
        <Text style={Styles.defaultText}>LOAD COMBAT</Text>
      </TouchableOpacity>
    </View>
    <Text style={Styles.defaultText}>Recent Combats:</Text>
  </View>
);

export default MainMenu;
