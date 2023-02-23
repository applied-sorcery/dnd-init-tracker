import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import FighterList from "./FighterList";
import Styles from "../../Style";


const PreBattleView = ({
  renderFighterListItem,
  combatObject,
  onStartPress,
  onAddFighterPress,
}) => (
  <>
    {
      <View style={[{ flex: 1, borderWidth: 0, borderColor: "red" }]}>
        <Text style={Styles.defaultText}> {"[get ready]"}</Text>
        <FighterList
          renderFighterListItem={renderFighterListItem}
          combatObject={combatObject}
          onAddFighterPress={onAddFighterPress}
        />
        <View style={Styles.buttonMenu}>
          <TouchableOpacity onPress={onStartPress}>
            <Text style={Styles.button}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    }
  </>
);
export default PreBattleView;
