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
import {AppButton, Confirm} from "./CustomCore.js"

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
    </Confirm>
  ); //return

      
  /*
    <Modal
      visible={showNameCombatView}
      onRequestClose={() => {
        setShowNameCombatView(false);
      }}
    >
      <View
        style={{backgroundColor: "black", height: "100%"}}
      >
        <AppButton
          onPress={() => {
            onConfirmSaveCombat(combatName);
          }}
        >Save</AppButton>
        <AppButton
          onPress={() => setShowNameCombatView(false)}
        >Cancel</AppButton>
      </View>
    </Modal>
  ); //return
  */
  /*
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,

        top: "15%",
        left: "12.5%",
        right: 0,
        bottom: 0,
        maxHeight: 300,
        minHeight: 200,
        width: "75%",
        justifyContent: "center",
        // alignSelf: "center",
        backgroundColor: "#2f363c",
        borderWidth: 2,
        borderColor: "#aaa",
      }}
    >
      <TextInput
        style={{
          borderWidth: 2,
          color: "#a5a0a0",
          fontSize: 16,
          margin: 10,
          borderColor: "#a5a0a0",
          backgroundColor: "#444",
          paddingLeft: 10,
        }}
        value={combatName}
        placeholderTextColor={"#fff"}
        placeholder={"[enter name]"}
        onChangeText={(text) => setCombatName(text)}
        multiline={false}
        theme={{ colors: { primary: "red" } }}
      />

      <View
        style={{
          flex: 1,
          // borderWidth: 2,
          borderColor: "orange",
          maxHeight: 200,
        }}
      >
        <AppButton
          onPress={() => {
            onConfirmSaveCombat(combatName);
          }}
        >Save</AppButton>
        <AppButton
          onPress={() => setShowNameCombatView(false)}
        >Cancel</AppButton>
      </View>
    </View>
  ); //return
  */
};

export default NameCombatView;
