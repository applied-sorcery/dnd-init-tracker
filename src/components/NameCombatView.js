import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";

const NameCombatView = ({
  combatObject,
  setShowNameCombatView,
  onConfirmSaveCombat,
}) => {
  const [combatName, setCombatName] = useState(combatObject.name);
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
        <TouchableOpacity
          style={[Styles.controlButton, { minHeight: 50, maxHeight: 80 }]}
          onPress={() => {
            onConfirmSaveCombat(combatName);
          }}
        >
          <Text style={Styles.defaultText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.controlButton, { minHeight: 50, maxHeight: 80 }]}
          onPress={() => setShowNameCombatView(false)}
        >
          <Text style={Styles.defaultText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NameCombatView;
