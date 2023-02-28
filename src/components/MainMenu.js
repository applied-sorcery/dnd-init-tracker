import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Styles from "../../Styles";
import { CtrlBtn, AppText, AppButton } from "./CustomCore";
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
            name: "new - unnamed",
            whoseTurn: 0,
            fighters: [],
            round: 0,
          }});
          
          navigation.navigate("Combat Container");
        }}>
          New Combat
        </CtrlBtn>
        <CtrlBtn style={Styles.mainMenuButton} onPress={() => { navigation.navigate("Load Combat")}}>Load Combat</CtrlBtn>
        <AppText>{"Recent  Combats: \n\n"}</AppText>
        <AppButton onPress={()=>navigation.navigate("Combat Container")} style={Styles.defaultText}>{state?.combatObject.name}</AppButton>
    </View>
  </View>);
};

export default MainMenu;
