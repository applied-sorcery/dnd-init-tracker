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

//if there are no saved combats, assume it's a new combat, display new combat view
//if there are saved combats, then we will display a Combat Menu with options: Load or New Combat
//once there are SOME fighters in the list, the start button appears.

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
        {/* <FighterList renderItem={renderItem} fighters={fighters} /> */}
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
