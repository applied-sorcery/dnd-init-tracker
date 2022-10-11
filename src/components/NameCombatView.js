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
        left: "25%",
        right: 0,
        bottom: 0,
        maxHeight: "65%",
        minHeight: 200,
        width: "50%",
        // justifyContent: "center",
        // alignSelf: "center",
        backgroundColor: "#2f363c",
        borderWidth: 2,
        borderColor: "red",
      }}
    >
      <TextInput
        style={{
          borderWidth: 2,
          color: "#a5a0a0",
          fontSize: 16,
          borderColor: "green",
        }}
        value={combatName}
        placeholderTextColor={"#fff"}
        placeholder={
          combatObject.name
            ? combatObject.name
            : "combat" + "-" + combatObject.id
        }
        onChangeText={(text) => setCombatName(text)}
        multiline={false}
        theme={{ colors: { primary: "red" } }}
      />

      <View
        style={{
          flex: 1,
          borderWidth: 2,
          borderColor: "orange",
          minHeight: 200,
        }}
      >
        <TouchableOpacity
          style={[Styles.controlButton, { minHeight: 50 }]}
          onPress={() => {
            onConfirmSaveCombat(combatName);
          }}
        >
          <Text style={Styles.defaultText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   style={[Styles.controlButton, { minHeight: 50 }]}
          onPress={() => setShowNameCombatView(false)}
        >
          <Text style={Styles.defaultText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NameCombatView;
