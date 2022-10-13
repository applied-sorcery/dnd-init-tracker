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
  StyleSheet
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

  const onAddFighterPress = () => {
    setAddFighterModalVisible(true)
  }

  const handleAddFighterSubmit = (newFighter) => {
    setFighters([
      ...fighters,
      newFighter
    ])
    // Required for list of fighters to show in CombatView
    setPreBattle(true)
    setShowNewCombatView(false)
  }

  const AddFighterView = ({onAddFighterSubmit}) => {
    const [newFighter, setNewFighter] = useState({
      id: newFighterId(),
      name: 'NA',
      initScore: '0'
    })

    const styles = StyleSheet.create({
      container: {
        // top padding or margin crashes app
        height: '100%',
        backgroundColor: 'black',
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
        backgroundColor: '#666',
        marginBottom: 30,
      },
      header: {
        fontSize: 30,
        marginBottom: 30,
      },
      btnWrapper: {
        alignItems: 'center',
        marginTop: 30,
      },
      button: {
        alignItems: 'center',
        width: '75%',
        backgroundColor: '#3399ff',
        marginBottom: 20,
        paddingVertical: 10,
        borderRadius: 2,
      },
      btnText: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: '500',
      },
    })

    return (
      <Modal
        animationType='slide'
        visible={addFighterModalVisible}
        onRequestClose={() => {
          setAddFighterModalVisible(!addFighterModalVisible)
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Create a new fighter</Text>
            <Text style={styles.text}>Fighter Name:</Text>
            <TextInput
              style={[styles.text, styles.input]} 
              placeholder='Name of player or enemy'
              onChangeText={(name) => {
                setNewFighter({...newFighter, name: name})
              }}
            />
            <Text style={styles.text}>Initiative Score:</Text>
            <TextInput
              style={[styles.text, styles.input]}
              keyboardType='numeric'
              placeholder='0'
              onChangeText={(initScore) => {
                setNewFighter({...newFighter, initScore: initScore})
              }}
            />
            <View style={styles.btnWrapper}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  onAddFighterSubmit(newFighter)
                }}
              >
                <Text style={styles.btnText}>Submit</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setAddFighterModalVisible(!addFighterModalVisible)}
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
  const newFighterId = () => {
    return fighters.length + 1
  }

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
      {/*<FighterList />*/}
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
