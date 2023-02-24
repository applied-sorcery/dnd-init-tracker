import React, { useState } from "react";
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
import Styles from "../../Style";
import AddFighterView from "./AddFighterView.js";
import { CtrlBtn } from './CustomCore'
import FighterList from "./FighterList";



const baseUrl = "http://dnd5eapi.co";

const CombatContainer = ({ navigation }) => {
  const [combatObject, setCombatObject] = useState({
    id: 0,
    name: "",
    whoseTurn: 0,
    fighters: [],
    round: 0,
  });

  const { id, name, round, whoseTurn, fighters } = combatObject;

  /**
   * These are setters for updating the state whenever combatObject needs to change.
   * you can't just set an attribute of combatObject and expect react to re-render
   * your comonent. When you update an object's attribute the object isn't changing,
   * 'CombatObject' still refers to the same object. In react you need to change the
   * state variable to trigger a re-render, so you have to call setCombatObject.
   * These functions do that and allow for a concise way for other comps to update
   * info about this combat object.
   */
  const setId = (prop) => {
    setCombatObject({ ...combatObject, id: prop });
  };
  const setName = (prop) => {
    setCombatObject({ ...combatObject, name: prop });
  };
  const setRound = (prop) => {
    setCombatObject({ ...combatObject, round: prop });
  };

  const setWhoseTurn = (prop) => {
    setCombatObject({ ...combatObject, whoseTurn: prop });
  };

  const setFighters = (prop) => {
    setCombatObject({ ...combatObject, fighters: prop });
  };
  const [showSaveCombatView, setShowSaveCombatView] = useState(false);
  const [addFighterModalVisible, setAddFighterModalVisible] = useState(false);
  const [savedCombats, setSavedCombats] = useState([
    {
      id: 1,
      name: "my combat 1",
      fighters: [
        { name: "fighter-1", initScore: 2, id: 1 },
        { name: "fighter-2", initScore: 3, id: 2 },
      ],
      round: 0,
      whoseTurn: 0,
    },
  ]);

  //helper functions

  const newFighterId = () => {
    return combatObject.fighters.length + 1;
  };

  //button press handlers

  const handleAddFighterSubmit = (newFighter) => {
    setFighters(
      [...fighters, newFighter].sort((a, b) => b.initScore - a.initScore)
    );
  };

  const onAddFighterPress = () => {
    console.log("inside onAddFighterPress");
    setAddFighterModalVisible(true);
  };

  const onNewCombatPress = () => {
    setCombatObject({
      id: 0,
      name: "",
      whoseTurn: 0,
      fighters: [],
      round: 0,
    });
  };


  const onLoadCombatPress = () => {
  };

  const onConfirmLoadCobmat = (combatObj) => {
    setCombatObject({ ...combatObj });
  };

  const onLoadFighterPress = () => {};

  const onSaveCombatPress = () => {
    setShowSaveCombatView(true);
  };

  const onConfirmSaveCombat = (combatName) => {
    setSavedCombats([
      ...savedCombats,
      {
        ...combatObject,
        name: combatName,
        id: savedCombats.length + 1,
      },
    ]);
    setShowSaveCombatView(false);
  };

  const onStartPress = () => {
    if (round == 0) {
      setCombatObject({
        ...combatObject,
        round: 1,
        whoseTurn: 0,
      });
    }
  };

  const onNextPress = () => {
    if (fighters.length - 1 == whoseTurn) {
      setCombatObject({
        ...combatObject,
        whoseTurn: 0,
        round: round + 1,
      });
    } else {
      setCombatObject({
        ...combatObject,
        whoseTurn: whoseTurn + 1,
      });
    }
  };

  //this button might be going away, who's actually going to reset a battle to round 0?
  // could be useful for testing
  const onResetPress = () => {
    setCombatObject({
      ...combatObject,
      whoseTurn: 0,
      round: 0,
    });
  };

  const onClearPress = () => {
    setCombatObject({
      id: 0,
      name: "",
      whoseTurn: 0,
      fighters: [],
      round: 0,
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.controlButtonRow}>
        <CtrlBtn onPress={onSaveCombatPress}>Save</CtrlBtn>
        <CtrlBtn onPress={onLoadCombatPress}>Load</CtrlBtn>
        <CtrlBtn onPress={onClearPress}>Clear</CtrlBtn>
      </View>
      <View style={{ flex: 1 }}>
        {/* <CombatView
          combatObject={combatObject}
          onAddFighterPress={onAddFighterPress}
          onResetPress={onResetPress}
          onStartPress={onStartPress}
          onNextPress={onNextPress}
        /> */}
          <FighterList
            combatObject={combatObject}
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
        combatObject={combatObject}
        onChangeCombatName={(text) =>
          setCombatObject({ ...combatObject, name: text })
        }
        name={name}
        showSaveCombatView={showSaveCombatView}
        setShowSaveCombatView={(value) => setShowSaveCombatView(value)}
        onConfirmSaveCombat={onConfirmSaveCombat}
      />
      
      <AddFighterView
        combatObject={combatObject}
        onAddFighterSubmit={handleAddFighterSubmit}
        newFighterId={newFighterId}
        addFighterModalVisible={addFighterModalVisible}
        setAddFighterModalVisible={setAddFighterModalVisible}
      />
    </View>
  );
};

export default CombatContainer;
