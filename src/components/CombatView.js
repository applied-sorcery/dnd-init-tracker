/**
 * -every person in the list of fighters should have an init score, check if they do. if they don't: can't start the combat
 * -the list of fighters should be sorted by init score
 * -"whoseTurn" state var gets set to 0, the first index of the sorted  fighters array. it will always correspond to an array index
 * -setWhoseTurn gets called to update whose turn it is whenever the next button gets pressed (whoseTurn + 1)
 *
 */

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ListItem from "./ListItem.js";
import Styles from "../../Style";

const baseUrl = "http://dnd5eapi.co";

const CombatView = () => {
  const [round, setRound] = useState(0);
  const [whoseTurn, setWhoseTurn] = useState();
  const [duringBattle, setDuringBattle] = useState(false);
  const [preBattle, setPreBattle] = useState(true);
  const [addingFighter, setAddingFighter] = useState(false);
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

  const [fighters, setFighters] = useState([
    // { id: "1", name: "tim", initScore: 2 },
    // { id: "2", name: "katie", initScore: 20 },
    // { id: "3", name: "todd", initScore: 19 },
    // { id: "4", name: "sarah", initScore: 13 },
  ]);

  //some dummy data: when this array is uncommented, there are 4 currently added/ready fighters, they should be displayed
  //if this array is commented out, there are no loaded fighters and the plus sign to add fighters is front and center
  //also the start button won't be available

  // [
  //   { id: "1", name: "tim", initScore: 2 },
  //   { id: "2", name: "katie", initScore: 20 },
  //   { id: "3", name: "todd", initScore: 19 },
  //   { id: "4", name: "sarah", initScore: 13 },
  // ]
  const [savingCombat, setSavingCombat] = useState(false);
  const [loadingCombat, setLoadingCombat] = useState(false);
  const [namingCombat, setNamingCombat] = useState(false);

  const [testData, setTestData] = useState();

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
  const onNewCombatPress = () => {};

  const onNewFighterPress = () => {};

  const onLoadCombatPress = () => {};

  const onLoadFighterPress = () => {};

  const onSaveCombatPress = () => {};

  const onPlusIconPress = () => {};

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
    <>
      <TouchableOpacity onPress={onLoadCombatPress}>
        <Text style={Styles.button}>LOAD COMBAT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNewCombatPress}>
        <Text style={Styles.button}>NEW COMBAT</Text>
      </TouchableOpacity>
      <Text style={Styles.defaultText}>Recent:</Text>
    </>
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
    <View
      style={[
        Styles.container,
        { borderWidth: 2, borderColor: "yellow", margin: 10 },
      ]}
    >
      <Text style={Styles.defaultText}>New Combat:</Text>
      <Text style={Styles.defaultText}>Recent:</Text>
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
      {!fighters ? (
        <>{isNewCombat() ? <NewCombatView /> : <CombatMenu />}</>
      ) : (
        <View
          style={[
            Styles.container,
            { flex: 1, borderWidth: 2, borderColor: "red" },
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
      )}
    </>
  );

  return (
    //this is view returned by the combatView component.
    //different sub view components are rendered based on state.
    <View style={Styles.container}>
      <View style={Styles.someOptionsRow}>
        {/* save, load, add buttons goes here */}
        <View style={Styles.addFighterButton}>
          <TouchableOpacity onPress={onPlusIconPress}>
            <Text style={Styles.defaultText}>Add Fighter</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.addFighterButton}>
          <TouchableOpacity onPress={onPlusIconPress}>
            <Text style={Styles.defaultText}>Save Combat</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.addFighterButton}>
          <TouchableOpacity onPress={onPlusIconPress}>
            <Text style={Styles.defaultText}>Load Combat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, minHeight: "75%" }}>
        {preBattle && <PreBattleView />}
        {duringBattle && <DuringBattleView />}
      </View>
      {/*{addingFighter && <AddingFighterView />}
      {savingCombat && <SavingCombatView />}
      {loadingCombat && <LoadingCombatView />}
      {namingCombat && <NamingCombatView />} */}
    </View>
  );
};

export default CombatView;
