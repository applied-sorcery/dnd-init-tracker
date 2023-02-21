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

const CombatView = ({
  renderFighterListItem,
  combatObject,
  onStartPress,
  onAddFighterPress,
  setRound,
  onNextPress,
  onResetPress,
}) => (
  <>
    {
      <View style={[{ flex: 1, borderWidth: 0, borderColor: "red" }]}>
        <Text style={Styles.defaultText}> {"[get ready]"}</Text>
        {/* <FighterList renderItem={renderItem} fighters={fighters} /> */}
        <FighterList
          renderFighterListItem={renderFighterListItem}
          combatObject={combatObject}
          currentView={"PreBattle"}
          onAddFighterPress={onAddFighterPress}
        />
        <View style={Styles.buttonMenu}>
          <TouchableOpacity onPress={onStartPress}>
            <Text style={Styles.button}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onNextPress}>
            <Text style={Styles.button}>NEXT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onResetPress}>
            <Text style={Styles.button}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    }
  </>
);
export default CombatView;
