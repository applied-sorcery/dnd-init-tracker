import React, { useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import MainMenu from "./MainMenu.js";
import LoadCombatView from "./LoadCombatView.js";
import SaveCombatView from "./SaveCombatView.js";
import Styles from "../../Styles";
import AddFighterView from "./AddFighterView.js";
import { AppText, CtrlBtn } from './CustomCore'
import FighterList from "./FighterList";
import { ThisIsAContext } from "./ThisIsAContext.js";



const baseUrl = "http://dnd5eapi.co";

const CombatContainer = ({ navigation }) => {
  
  const {state, setState} = useContext(ThisIsAContext);
  const {combatObject, savedCombats} = state;

  const setFighters = (prop) => {
    setState({...state, combatObject: {...state.combatObject, fighters: prop }
  })};

  const [showSaveCombatView, setShowSaveCombatView] = useState(false);
  const [addFighterModalVisible, setAddFighterModalVisible] = useState(false);
  

  //helper functions

 

  const newFighterId = () => {
    return state.combatObject.fighters.length + 1;
  };

  //button press handlers

  const handleAddFighterSubmit = (newFighter) => {
    setFighters(
      [...state.combatObject.fighters, newFighter].sort((a, b) => b.initScore - a.initScore)
    );
  };

  const onAddFighterPress = () => {
    console.log("inside onAddFighterPress");
    setAddFighterModalVisible(true);
  };

  const onLoadCombatPress = () => {
    navigation.navigate("Load Combat")
  };

  const onConfirmLoadCobmat = (combatObj) => {
    // setCombatObject({ ...combatObj });
  };


  const onSaveCombatPress = () => {
    setShowSaveCombatView(true);
  };


  // this function is called when the user presses "ok" button to confirm that they are saving the combat.
  // It calls setState ( provided by a context defined in App.js, "ThisIsAContext" ).
  // It uses the spread operator to copy existing state into the new state we are setting
  // so that we only change the parts we want to change. We are not modifying the current combatObject state,
  // only the savedCombats array within state. We are adding a new object to the savedCombats array, 
  //this current combatObject, but we are also apending a name and id to the current combat object
  //before we add it to the savedCombats array. Lastly we hide the modal  saveCombatView.

  const onConfirmSaveCombat = (combatName) => {
    setState({
      savedCombats: [
        ...state.savedCombats,
        {
          ...state.combatObject,
          name: combatName,
          id: state.savedCombats.length + 1,
        },
      ], 
      combatObject: {...state.combatObject, name: combatName},
    });
    setShowSaveCombatView(false);
  };

  const onStartPress = () => {
    if (state.combatObject.round == 0) {
      setState({
        ...state, combatObject: 
          {
            ...state.combatObject,
            round: 1,
            whoseTurn: 0,
          }
      });
    }
  };

  const onNextPress = () => {
    if (state.combatObject.fighters.length - 1 === state.combatObject.whoseTurn) {
      setState({
        ...state, combatObject: 
          { ...state.combatObject,
            whoseTurn: 0,
            round: state.combatObject.round + 1,
          }
      });
    } else {
      setState({
        ...state, combatObject: {
          ...state.combatObject,
          whoseTurn: state.combatObject.whoseTurn + 1,
        }
      });
    }
  };

  //this button might be going away, who's actually going to reset a battle to round 0?
  // could be useful for testing
  const onResetPress = () => {
    alert('decomissioned')
    // setCombatObject({
    //   ...combatObject,
    //   whoseTurn: 0,
    //   round: 0,
    // });
  };

  const onClearPress = () => {
    alert('decomissioned')
    // setCombatObject({
    //   id: 0,
    //   name: "",
    //   whoseTurn: 0,
    //   fighters: [],
    //   round: 0,
    // });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.controlButtonRow}>
        <CtrlBtn onPress={onSaveCombatPress}>Save</CtrlBtn>
        <CtrlBtn onPress={onLoadCombatPress}>Load</CtrlBtn>
        <CtrlBtn onPress={onClearPress}>Clear</CtrlBtn>
      </View>
      <View style={{ flex: 1 }}>
          <AppText style={{alignSelf: "center"}}>{state.combatObject.name}</AppText>
          <AppText style={{alignSelf: "center"}}>Round: {state.combatObject.round}</AppText>
          <FighterList
            combatObject={state.combatObject}
            onAddFighterPress={onAddFighterPress}
          />
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
            <View
              style={Styles.controlButtonRow}>
              <CtrlBtn onPress={onStartPress}>START</CtrlBtn>
              <CtrlBtn onPress={onNextPress}>NEXT</CtrlBtn>
              <CtrlBtn onPress={onResetPress}>RESET</CtrlBtn>
            </View>
          </View>
      </View>

      {/*Modals for saving combat and adding fither*/}
      
      <SaveCombatView
        combatObject={state.combatObject}
        onChangeCombatName={(text) =>
          setState({...state, combatObject: {...state.combatObject, name: text }
        })}
        name={state.combatObject.name}
        showSaveCombatView={showSaveCombatView}
        setShowSaveCombatView={(value) => setShowSaveCombatView(value)}
        onConfirmSaveCombat={onConfirmSaveCombat}
      />
      
      <AddFighterView
        combatObject={state.combatObject}
        onAddFighterSubmit={handleAddFighterSubmit}
        newFighterId={newFighterId}
        addFighterModalVisible={addFighterModalVisible}
        setAddFighterModalVisible={setAddFighterModalVisible}
      />
    </View>
  );
};

export default CombatContainer;
