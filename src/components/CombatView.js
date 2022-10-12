/**
 * -every person in the list of fighters should have an init score, check if they do. if they don't: can't start the combat
 * -the list of fighters should be sorted by init score
 * -"whoseTurn" state var gets set to 0, the first index of the sorted  fighters array. it will always correspond to an array index
 * -setWhoseTurn gets called to update whose turn it is whenever the next button gets pressed (whoseTurn + 1)
 *
 */

import React, { useState } from "react";
import { 
  View, Text, FlatList, TouchableOpacity,
  Modal,
  Alert,
  Pressable, 
  Button,
  TextInput,
} from "react-native";
import ListItem from "./ListItem.js";
import Styles from "../../Style";

const baseUrl = "http://dnd5eapi.co";

const CombatView = () => {
  const [round, setRound] = useState(0);
  const [whoseTurn, setWhoseTurn] = useState();
  const [duringBattle, setDuringBattle] = useState(false);
  const [preBattle, setPreBattle] = useState(false);
  const [addingFighter, setAddingFighter] = useState(false);
  const [showCombatMenu, setShowCombatMenu] = useState(true);
  const [showNewCombatView, setShowNewCombatView] = useState(false);

  // Add Fighter

  const [addFighterModalVisible, setAddFighterModalVisible] = useState(false)
  const [addFighterName, setAddFighterName] = useState()

  const onAddFighterPress = () => {
    setAddFighterModalVisible(true)
  }

/*
  const handleAddFighterSubmit = (fighter) => {
    setFighters([...fighters, fighter])
  }
*/

  const handleAddFighterSubmit = (fighter) => {
    setAddFighterName(fighter)
  } 

  const AddFighterView = (props) => {
    const [name, setName] = useState()
    //const [addFighterName, setAddFighterName] = useState()
    return (
      <Modal
        visible={addFighterModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setAddFighterModalVisible(!addFighterModalVisible)
        }}
      >
        <View style={{backgroundColor:'black'}}>
          <Text style={{fontSize: 30}}>Hello, I am your modal.</Text>
          <Text>Fighter Name:</Text>
          <TextInput
            placeholder='Name of player or enemy'
            blurOnSubmit={true}
            onSubmitEditing={(name) => {
              //setAddFighterName(name.nativeEvent.text)
              //setName(name.nativeEvent.text)
              //console.log(name.nativeEvent)
            }}
            onChangeText={(name) => {
              setName(name)
            }}
          />
          <Text>Initiative Score:</Text>
          <TextInput
            keyboardType='numeric'
            placeholder='0'
          />
          <Button
            title="Submit"
            onPress={() => {
              props.onAddFighterSubmit(name)
            }}
          />
          <Button
            title="Broke Submit"
            //onPress={props.onAddFighterSubmit(name)}
            onPress={() => {}}
          />
          <Text style={{fontSize:30}}>Input: {name}</Text>
          <Text style={{fontSize:30}}>Submit: {addFighterName}</Text>
          <Button
            title="Close Modal"
            onPress={() => setAddFighterModalVisible(!addFighterModalVisible)}
          />
        </View>
      </Modal>
    )
  } // Add Fighter


  const [savedCombats, setSavedCombats] = useState([
    // {
    //   name: "combat1",
    //   fighters: [{ name: "fighter-1" }, { name: "fighter-2" }],
    // },
  ]);

  //some dummy data: when this array is uncommented, there is 1 saved combat named "cobmat1" which has 2 fighters...
  //if this array is commented out, there are no saved combats and the screen loads directly to new combat view
  // [
  //   {
  //     name: "combat1",
  //     fighters: [{ name: "fighter-1" }, { name: "fighter-2" }],
  //   },
  // ]

  const [fighters, setFighters] = useState([]);
  // [
  // { id: "1", name: "tim", initScore: 2 },
  // { id: "2", name: "katie", initScore: 20 },
  // { id: "3", name: "todd", initScore: 19 },
  // { id: "4", name: "sarah", initScore: 13 },
  // ]

  //some dummy data: when this array is uncommented, there are 4 currently added/ready fighters, they should be displayed
  //if this array is commented out, there are no loaded fighters and the plus sign to add fighters is front and center
  //also the start button won't be available

  // [
  //   { id: "1", name: "Gorthax", initScore: 2 },
  //   { id: "2", name: "the BBEG", initScore: 20 },
  //   { id: "3", name: "Rothalos", initScore: 19 },
  //   { id: "4", name: "Corrupted One", initScore: 13 },
  // ];
  const [savingCombat, setSavingCombat] = useState(false);
  const [loadingCombat, setLoadingCombat] = useState(false);
  const [namingCombat, setNamingCombat] = useState(false);

  const [testData, setTestData] = useState([
    { id: "1", name: "Gorthax", initScore: 2 },
    { id: "2", name: "the BBEG", initScore: 20 },
    { id: "3", name: "Rothalos", initScore: 19 },
    { id: "4", name: "Corrupted One", initScore: 13 },
  ]);

  //helper functions
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

  //goes with FlatList component
  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      myTurn={fighters.indexOf(item) == whoseTurn && !preBattle ? true : false}
    />
  );

  //button press handlers
  const onNewCombatPress = () => {
    setShowNewCombatView(true);
    setShowCombatMenu(false);
  };

  const onNewFighterPress = () => {
  }

  const onLoadCombatPress = () => {
    setShowCombatMenu(false);
    setShowNewCombatView(false);
    setPreBattle(true);
    setRound(0);
    setDuringBattle(false);
    setFighters(testData);
  };

  const onLoadFighterPress = () => {};

  const onSaveCombatPress = () => {};

  const onGoBackPress = () => {
    setShowCombatMenu(true);
    setShowNewCombatView(false);
  };
  const onStartPress = () => {
    setWhoseTurn(0);
    setPreBattle(false);
    setDuringBattle(true);
    setRound(1);
  };

  const onNextPress = () => {
    if (fighters.length - 1 == whoseTurn) {
      setRound((round) => round + 1);
      setWhoseTurn(0);
    } else {
      setWhoseTurn(whoseTurn + 1);
    }
  };

  const onResetPress = () => {
    setRound(0);
    setWhoseTurn(0);
    setPreBattle(true);
    setDuringBattle(false);
  };

  //function components

  const CombatMenu = () => (
    <View style={Styles.combatMenu}>
      <View style={Styles.someButtonsColumn}>
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
          onPress={onNewCombatPress}
        >
          <Text style={Styles.defaultText}>NEW COMBAT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
          onPress={onLoadCombatPress}
        >
          <Text style={Styles.defaultText}>LOAD COMBAT</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.defaultText}>Recent Combats:</Text>
    </View>
  );

  //this is the list of added/ready fighters. it can be populated manually or
  // by loading groups/individuals
  const FighterList = () => (
    <View style={Styles.listArea}>
      <FlatList
        data={fighters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={Styles.defaultText}>{"<no mobs yet>"}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );

  //this displays when the user presses the new combat button or when
  //there are no saved combats to load
  const NewCombatView = () => (
    <View style={Styles.combatMenu}>
      <View style={Styles.someButtonsColumn}>
        <Text style={Styles.defaultText}>New Combat:</Text>
        {/* save, load, add buttons goes here */}
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
          onPress={onAddFighterPress}
        >
          <Text style={Styles.defaultText}>Add Fighter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSaveCombatPress}
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        >
          <Text style={Styles.defaultText}>Save Combat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
          onPress={onLoadCombatPress}
        >
          <Text style={Styles.defaultText}>Load Combat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onGoBackPress}
          style={[Styles.controlButton, { minWidth: "60%", maxHeight: "20%" }]}
        >
          <Text style={Styles.defaultText}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.defaultText}>Recent Fighters:</Text>
    </View>
  );

  //once the battle has started, display these things:
  //  --round number
  //  --fighter list
  //  --Next button
  //  --Reset button
  const DuringBattleView = () => (
    <>
      <Text style={Styles.defaultText}>{"Round: " + round}</Text>
      <FighterList />
      <View style={Styles.buttonMenu}>
        <TouchableOpacity onPress={onNextPress}>
          <Text style={Styles.button}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetPress}>
          <Text style={Styles.button}>RESET</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  // when we first load this screen we should assume it's a new combat
  //if there are no saved combats

  //if there are saved combats, then we will display a Combat Menu with options: Load or New Combat

  //once there are SOME fighters in the list, the start button appears.
  const PreBattleView = () => (
    <>
      {
        <View
          style={[
            Styles.container,
            { flex: 1, borderWidth: 0, borderColor: "red" },
          ]}
        >
          <Text style={Styles.defaultText}> [get ready] </Text>
          <FighterList />
          <View style={Styles.buttonMenu}>
            <TouchableOpacity onPress={onStartPress}>
              <Text style={Styles.button}>START</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </>
  );

  return (
    //this is view returned by the combatView component.
    //different sub view components are rendered based on state.

    <View style={Styles.container}>
      <AddFighterView
        onAddFighterSubmit={handleAddFighterSubmit}
      />
      {showCombatMenu ? (
        <CombatMenu />
      ) : showNewCombatView ? (
        <NewCombatView />
      ) : (
        <>
          <View style={Styles.someOptionsRow}>
            {/* save, load, add buttons goes here */}
            <TouchableOpacity
              style={[Styles.controlButton, { minWidth: "10%" }]}
              onPress={onAddFighterPress}
            >
              <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
                Add Fighter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.controlButton}
              onPress={onSaveCombatPress}
            >
              <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
                Save Combat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.controlButton}
              onPress={onLoadCombatPress}
            >
              <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
                Load Combat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.controlButton}
              onPress={onGoBackPress}
            >
              <Text style={[Styles.defaultText, { fontSize: 16, margin: 0 }]}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              minHeight: "75%",
              // borderWidth: 5,
              // borderColor: "cornflowerblue",
            }}
          >
            {/* {showNewCombatView && <NewCombatView />} */}
            {preBattle && <PreBattleView />}
            {duringBattle && <DuringBattleView />}
          </View>
          {/*{addingFighter && <AddingFighterView />}
      {savingCombat && <SavingCombatView />}
      {loadingCombat && <LoadingCombatView />}
      {namingCombat && <NamingCombatView />} */}
        </>
      )}
    </View>
  );
  

};

export default CombatView;
