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
import PreBattleView from "./PreBattleView.js";
import DuringBattleView from "./DuringBattleView.js";
import CombatMenu from "./CombatMenu.js";
import SavedCombatList from "./SavedCombatList.js";
import NewCombatView from "./NewCombatView.js";
import NameCombatView from "./NameCombatView.js";
import ControlButtons from "./ControlButtons.js";
import Styles from "../../Style";
import AddFighterView from "./AddFighterView.js";

const baseUrl = "http://dnd5eapi.co";

const CombatView = () => {
  const [currentView, setCurrentView] = useState("CombatMenu");
  const [combatObject, setCombatObject] = useState({
    id: 0,
    name: "",
    whoseTurn: 0,
    fighters: [],
    round: 0,
  });

  const { id, name, round, whoseTurn, fighters } = combatObject;

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
  // const [showCombatMenu, setShowCombatMenu] = useState(true);
  const [showNewCombatView, setShowNewCombatView] = useState(false);
  const [showNameCombatView, setShowNameCombatView] = useState(false);
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

  const [testData, setTestData] = useState([
    { id: "1", name: "Gorthax", initScore: 2 },
    { id: "2", name: "the BBEG", initScore: 20 },
    { id: "3", name: "Rothalos", initScore: 19 },
    { id: "4", name: "Corrupted One", initScore: 13 },
  ]);

  //helper functions

  const newFighterId = () => {
    return fighters.length + 1;
  };

  const isNewCombat = () => {
    console.log("isNewCombat()");
    return savedCombats;
  };

  const sortFighters = () => {
    //sort fighters by init score
  };

  const isCombatReady = () =>
    //checks to see if there even are fighters in the list,
    // and if they all have init scores
    fighters && fighters.every((fighter) => fighter.initScore);

  //button press handlers

  const handleAddFighterSubmit = (newFighter) => {
    setFighters(
      [...fighters, newFighter].sort((a, b) => b.initScore - a.initScore)
    );
    setCurrentView("PreBattle");
  };

  const onAddFighterPress = () => {
    console.log("inside onAddFighterPress");
    setAddFighterModalVisible(true);
  };

  const onNewCombatPress = () => {
    setCurrentView("NewCombat");
  };

  const onNewFighterPress = () => {};

  const onLoadCombatPress = () => {
    setCurrentView("LoadCombat");
  };

  const onConfirmLoadCobmat = (combatObj) => {
    // console.log(combatObject.name, combatObject.fighters);
    // console.log("combatObj:", combatObj);
    // setShowCombatMenu(false);
    // setShowNewCombatView(false);

    setCurrentView("PreBattle");
    setCombatObject({ ...combatObj });
    // console.log("you just loaded this combat---> ", combatObj);
    // console.log("now combatObject is: ", combatObject);

    // setRound(0);
    // setCombatName(name);
    // setFighters(fighters);

    //does this function work?
    //yes
  };

  const onLoadFighterPress = () => {};

  const onSaveCombatPress = () => {
    setShowNameCombatView(true);
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
    setShowNameCombatView(false);
  };

  const onMenuPress = () => {
    setCurrentView("CombatMenu");
  };

  const onBackPress = () => {
    setCurrentView("PreBattle");
  };

  const onStartPress = () => {
    if (round == 0) {
      setCombatObject({
        ...combatObject,
        round: 1,
        whoseTurn: 0,
      });
    }
    setCurrentView("DuringBattle");
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
    setCurrentView("PreBattle");
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
    //this is view returned by the combatView component.
    //different sub view components are rendered based on state.

    <View style={Styles.container}>
      {currentView !== "CombatMenu" ? (
        <ControlButtons
          currentView={currentView}
          onAddFighterPress={onAddFighterPress}
          onLoadCombatPress={onLoadCombatPress}
          onSaveCombatPress={onSaveCombatPress}
          onMenuPress={onMenuPress}
          onBackPress={onBackPress}
          combatObject={combatObject}
          onClearPress={onClearPress}
        />
      ) : null}

      <View
        style={{
          flex: 1,
          minHeight: "75%",
          // borderWidth: 5,
          borderColor: "cornflowerblue",
        }}
      >
        {currentView == "CombatMenu" ? (
          <CombatMenu
            onNewCombatPress={onNewCombatPress}
            onLoadCombatPress={onLoadCombatPress}
            setCurrentView={setCurrentView}
            fighters={fighters}
          />
        ) : currentView == "NewCombat" ? (
          <NewCombatView onMenuPress={onMenuPress} />
        ) : currentView == "LoadCombat" ? (
          <SavedCombatList
            savedCombats={savedCombats}
            onConfirmLoadCobmat={onConfirmLoadCobmat}
          />
        ) : currentView == "PreBattle" ? (
          <PreBattleView
            combatObject={combatObject}
            onStartPress={onStartPress}
          />
        ) : currentView == "DuringBattle" ? (
          <DuringBattleView
            setRound={setRound}
            combatObject={combatObject}
            onNextPress={onNextPress}
            onResetPress={onResetPress}
          />
        ) : null}
        {showNameCombatView && (
          <NameCombatView
            combatObject={combatObject}
            onChangeCombatName={(text) =>
              setCombatObject({ ...combatObject, name: text })
            }
            name={name}
            setShowNameCombatView={(value) => setShowNameCombatView(value)}
            onConfirmSaveCombat={onConfirmSaveCombat}
          />
        )}
      </View>
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

export default CombatView;
