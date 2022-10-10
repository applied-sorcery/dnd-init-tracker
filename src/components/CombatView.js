/**
 * -every person in the list of combatants should have an init score, check if they do. if they don't: can't start the combat
 * -the list of combatants should be sorted by init score
 * -"whoseTurn" state var gets set to 0, the first index of the sorted  combatants array. it will always correspond to an array index
 * -setWhoseTurn gets called to update whose turn it is whenever the next button gets pressed (whoseTurn + 1)
 *
 */

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ListItem from "./ListItem.js";
import Styles from "../../Style";
import { Animated } from "react-native";

const baseUrl = "http://dnd5eapi.co";

const CombatView = () => {
  const [round, setRound] = useState(0);
  const [whoseTurn, setWhoseTurn] = useState(0);
  const [duringBattle, setDuringBattle] = useState(false);
  const [preBattle, setPreBattle] = useState(true);
  const [addingCombatant, setAddingCombatant] = useState(false);
  const [savedCombats, setSavedCombats] = useState(
    //some dummy data: when this array is uncommented, there is 1 saved combat named "cobmat1" which has 2 combatants...
    //if this array is commented out, there are no saved combats and the screen loads directly to new combat view
    [
      {
        name: "combat1",
        combatants: [{ name: "combatant-1" }, { name: "combatant-2" }],
      },
    ]
  );
  const [combatants, setCombatants] = useState(
    //some dummy data: when this array is uncommented, there are 4 currently added/ready combatants, they should be displayed
    //if this array is commented out, there are no loaded combatants and the plus sign to add combatants is front and center
    //also the start button won't be available

    [
      { id: "1", name: "tim", initScore: 2 },
      { id: "2", name: "katie", initScore: 20 },
      { id: "3", name: "todd", initScore: 19 },
      { id: "4", name: "sarah", initScore: 13 },
    ]
  );
  const [savingCombat, setSavingCombat] = useState(false);
  const [loadingCombat, setLoadingCombat] = useState(false);
  const [namingCombat, setNamingCombat] = useState(false);

  const [testData, settestData] = useState();

  const isNewCombat = () => {
    console.log("isNewCombat()");
    return savedCombats.length == 0;
  };
  const isCombatReady = () =>
    combatants && combatants.every((combatant) => combatant.initScore);

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      myTurn={
        combatants.indexOf(item) == whoseTurn && !preBattle ? true : false
      }
    />
  );

  //button press handlers
  const onNewCombatPress = () => {};

  const onNewCombatantPress = () => {};

  const onLoadCombatPress = () => {};

  const onLoadCombatantPress = () => {};

  const onPlusIconPress = () => {};

  const onStartPress = () => {
    setPreBattle(false);
    setDuringBattle(true);
    setRound(1);
  };

  const onNextPress = () => {
    if (combatants.length - 1 == whoseTurn) {
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

  const CombatantList = () => (
    <View style={Styles.listArea}>
      <FlatList
        data={combatants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={Styles.defaultText}>{"<no mobs yet>"}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );

  const NewCombatView = () => (
    <>
      <Text style={Styles.defaultText}>New Combat:</Text>
      <View>
        <TouchableOpacity onPress={onPlusIconPress}>
          <Text style={Styles.extraLargeText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.defaultText}>Recent:</Text>
    </>
  );

  //once the battle has started, display these things:
  //  --round number
  //  --combatant list
  //  --Next button
  //  --Reset button
  const DuringBattleView = () => (
    <>
      <Text style={Styles.defaultText}>{"Round: " + round}</Text>
      <CombatantList />
      <TouchableOpacity onPress={onNextPress}>
        <Text style={Styles.button}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onResetPress}>
        <Text style={Styles.button}>RESET</Text>
      </TouchableOpacity>
    </>
  );

  // when we first load this screen we should assume it's a new combat
  //if there are no saved combats

  //if there are saved combats, then we will display a Combat Menu with options: Load or New Combat

  //once there are SOME combatants in the list, the start button appears.
  const PreBattleView = () => (
    <>
      {!combatants ? (
        <>{isNewCombat() ? <NewCombatView /> : <CombatMenu />}</>
      ) : (
        <View style={Styles.container}>
          <Text style={Styles.defaultText}>--</Text>
          <CombatantList />
          <TouchableOpacity onPress={onStartPress}>
            <Text style={Styles.button}>START</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );

  //this is the list of combatants.
  // --can be populated manually adding or by loading

  return (
    <View style={Styles.container}>
      {preBattle && <PreBattleView />}
      {duringBattle && <DuringBattleView />}
      {/*{addingCombatant && <AddingCombatantView />}
      {savingCombat && <SavingCombatView />}
      {loadingCombat && <LoadingCombatView />}
      {namingCombat && <NamingCombatView />} */}

      {/*  

      ## PRE-BATTLE:
      -the entry point to the combat screen should immediately  
      show the "new combat" UI component if there are no saved combats 
      
      {isNewCombat() ? <NewCombatView />: <CombatMenu />} 



      ### the requirements to be able to start a battle: 
       1) there are some combatants loaded
       2) they all have initiative scores

      -once the above reqs are met, the START BUTTON becomes available

      ## BATTLE:
      -NEXT BUTTON appears

      ## BOTH:
      -PLUS ICON BUTTON: with dropdown after pressing it, options: add individual in either pre-battle or during battle there's the option to add more combatants.
      -You can save your combat OR yoru group in pre-battle OR battle
    -display the list of current combatants if there is one (both pre and during battle)*/}
    </View>
  );
};

export default CombatView;
