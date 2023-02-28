import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Style";
import { CtrlBtn, AppText } from "./CustomCore";
import { ThisIsAContext } from "./ThisIsAContext";

const MainMenu = ({
  onNewCombatPress,
  fighters,
  navigation,
}) => {
  const {state, setState} = useContext(ThisIsAContext);

  return (<View style={Styles.container}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CtrlBtn 
        style={Styles.mainMenuButton} 
        onPress={() => { 

          //this will clear the current combat object, maybe it should ask if you want to save first... 

          setState({...state, combatObject: 
          {
            id: 0,
            name: "",
            whoseTurn: 0,
            fighters: [],
            round: 0,
          }});
          
          navigation.navigate("Combat Container");
        }}>
          New Combat
        </CtrlBtn>
        <CtrlBtn style={Styles.mainMenuButton} onPress={() => { navigation.navigate("Load Combat")}}>Load Combat</CtrlBtn>
        <AppText style={Styles.defaultText}>Recent Combats:</AppText>
    </View>
  </View>);
};

export default MainMenu;
