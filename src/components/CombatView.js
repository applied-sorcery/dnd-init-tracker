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
import ListItem from "./ListItem.js";
import PreBattleView from "./PreBattleView.js";
import DuringBattleView from "./DuringBattleView.js";
import FighterList from "./FighterList.js";
import CombatMenu from "./CombatMenu.js";
import SavedCombatList from "./SavedCombatList.js";
import NewCombatView from "./NewCombatView.js";
import NameCombatView from "./NameCombatView.js";
import ControlButtons from "./ControlButtons.js";
import Styles from "../../Style";

const baseUrl = "http://dnd5eapi.co";

const CombatView = () => {
  const [currentView, setCurrentView] = useState("CombatMenu");
  const [combatObject, setCombatObject] = useState({
    id: 0,
    name: "",
    whoseTurn: 0,
    battlePhase: "",
    fighters: [],
  });

  const { id, name, round, whoseTurn, battlePhase, fighters } = combatObject;

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
  const setBattlePhase = (prop) => {
    setCombatObject({ ...combatObject, battlePhase: prop });
  };
  const setFighters = (prop) => {
    setCombatObject({ ...combatObject, fighters: prop });
  };
  // const [showCombatMenu, setShowCombatMenu] = useState(true);
  const [showNewCombatView, setShowNewCombatView] = useState(false);

  // Add Fighter
  const [addFighterModalVisible, setAddFighterModalVisible] = useState(false);

  const onAddFighterPress = () => {
    setAddFighterModalVisible(true);
  };

  const handleAddFighterSubmit = (newFighter) => {
    setFighters([...fighters, newFighter]);
    // Required for list of fighters to show in CombatView
    setPreBattle(true);
    setShowNewCombatView(false);
  };

  const AddFighterView = ({ onAddFighterSubmit }) => {
    const [newFighter, setNewFighter] = useState({
      id: newFighterId(),
      name: "NA",
      initScore: "0",
    });

    const styles = StyleSheet.create({
      container: {
        // top padding or margin crashes app
        height: "100%",
        backgroundColor: "black",
      },
      content: {
        marginHorizontal: 25,
        marginVertical: 50,
      },
      text: {
        fontSize: 20,
        marginBottom: 10,
      },
      input: {
        backgroundColor: "#666",
        marginBottom: 30,
      },
      header: {
        fontSize: 30,
        marginBottom: 30,
      },
      btnWrapper: {
        alignItems: "center",
        marginTop: 30,
      },
      button: {
        alignItems: "center",
        width: "75%",
        backgroundColor: "#3399ff",
        marginBottom: 20,
        paddingVertical: 10,
        borderRadius: 2,
      },
      btnText: {
        fontSize: 15,
        textTransform: "uppercase",
        color: "white",
        fontWeight: "500",
      },
    });

    return (
      <Modal
        animationType="slide"
        visible={addFighterModalVisible}
        onRequestClose={() => {
          setAddFighterModalVisible(!addFighterModalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Create a new fighter</Text>
            <Text style={styles.text}>Fighter Name:</Text>
            <TextInput
              style={[styles.text, styles.input]}
              placeholder="Name of player or enemy"
              onChangeText={(name) => {
                setNewFighter({ ...newFighter, name: name });
              }}
            />
            <Text style={styles.text}>Initiative Score:</Text>
            <TextInput
              style={[styles.text, styles.input]}
              keyboardType="numeric"
              placeholder="0"
              onChangeText={(initScore) => {
                setNewFighter({ ...newFighter, initScore: initScore });
              }}
            />
            <View style={styles.btnWrapper}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  onAddFighterSubmit(newFighter);
                  setAddFighterModalVisible(false);
                }}
              >
                <Text style={styles.btnText}>Submit</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setAddFighterModalVisible(false)}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </Pressable>
            </View>
            {/* Monitor values for input and submit
            <Text style={{fontSize:30}}>Input: {newFighter['name']}</Text>
            <Text style={{fontSize:30}}>Submit: {
              fighters.length > 0 && fighters[fighters.length - 1]['name']
            }</Text>
            */}
          </View>
        </View>
      </Modal>
    );
  }; // Add Fighter

  const [savedCombats, setSavedCombats] = useState([
    {
      id: 1,
      name: "my combat 1",
      fighters: [
        { name: "fighter-1", initScore: 2, id: 1 },
        { name: "fighter-2", initScore: 3, id: 2 },
      ],
      round: 0,
      battlePhase: "preBattle",
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

  //used by FlatList in <FighterList />
  const renderFighterListItem = ({ item }) => (
    <ListItem
      item={item}
      myTurn={
        fighters.indexOf(item) == whoseTurn && battlePhase != "preBattle"
          ? true
          : false
      }
    />
  );

  //used by FlatList in <SavedCombats />
  const renderCombatListItem = ({ item }) => (
    <ListItem item={item} onPress={(item) => onConfirmLoadCobmat(item)} />
  );

  //button press handlers
  const onNewCombatPress = () => {
    setCombatObject({});
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
    setShowSavedCombats(false);

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
  const onStartPress = () => {
    if (round == 0) {
      setCombatObject({
        ...combatObject,
        battlePhase: "duringBattle",
        round: 1,
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
      battlePhase: "preBattle",
      whoseTurn: 0,
      round: 0,
    });
    setCurrentView("PreBattle");
  };

  return (
    //this is view returned by the combatView component.
    //different sub view components are rendered based on state.

    <View style={Styles.container}>
      {currentView !== "CombatMenu" ? (
        <ControlButtons
          onLoadCombatPress={onLoadCombatPress}
          onSaveCombatPress={onSaveCombatPress}
          onMenuPress={onMenuPress}
        />
      ) : null}

      <View
        style={{
          flex: 1,
          minHeight: "75%",
          borderWidth: 5,
          borderColor: "cornflowerblue",
        }}
      >
        {currentView == "CombatMenu" ? (
          <CombatMenu
            onNewCombatPress={onNewCombatPress}
            onLoadCombatPress={onLoadCombatPress}
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
    </View>
  );
};

export default CombatView;
