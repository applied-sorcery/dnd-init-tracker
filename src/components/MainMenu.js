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
  onLoadCombatPress,
  setCurrentView,
  fighters,
  navigation,
}) => (
  <View style={Styles.combatMenu}>
    <View style={Styles.someButtonsColumn}>
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        onPress={() => {
          navigation.navigate("CombatContainer");
        }}
      >
        <Text style={Styles.defaultText}>NEW COMBAT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        onPress={() => {
          navigation.navigate("SavedCombats");
        }}
      >
        <Text style={Styles.defaultText}>LOAD COMBAT</Text>
      </TouchableOpacity>
      {fighters?.length ? (
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
          onPress={() => {
            setCurrentView("PreBattle");
          }}
        >
          <Text style={Styles.defaultText}>RESUME</Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
    <Text style={Styles.defaultText}>Recent Combats:</Text>
  </View>
);

export default MainMenu;
