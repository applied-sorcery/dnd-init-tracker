import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";
import { CtrlBtn, AppText } from "./CustomCore";

const MainMenu = ({
  onNewCombatPress,
  fighters,
  navigation,
}) => (
  <View style={Styles.container}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CtrlBtn style={Styles.mainMenuButton} onPress={() => { navigation.navigate("Combat Container")}}>New Combat</CtrlBtn>
        <CtrlBtn style={Styles.mainMenuButton} onPress={() => { navigation.navigate("Load Combat")}}>Load Combat</CtrlBtn>
        <AppText style={Styles.defaultText}>Recent Combats:</AppText>
    </View>
  </View>
);

export default MainMenu;
