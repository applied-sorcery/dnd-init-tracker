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

const CombatView = ({ navigation, ...props }) => {
  //mock data:
  const [round, setRound] = useState(0);
  const [addingName, setAddingName] = useState(false);
  const [addingInit, setAddingInit] = useState(false);
  const [whoseTurn, setWhoseTurn] = useState(0);
  const [preBattle, setPreBattle] = useState(true);
  const [savedCombats, setSavedCombats] = useState([]);
  const [combatants, setCombatants] = useState(props.combatants);
  const [testData, settestData] = useState([
    { id: "1", name: "tim", initScore: 2 },
    { id: "2", name: "katie", initScore: 20 },
    { id: "3", name: "todd", initScore: 19 },
    { id: "4", name: "sarah", initScore: 13 },
  ]);

  const isNewCombat = () => savedCombats == 0;
  const isCombatReady = () =>
    combatants && combatants.every((combatant) => combatant.initScore);

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      myTurn={testData.indexOf(item) == whoseTurn && !preBattle ? true : false}
    />
  );

  const onStartPress = () => {
    setPreBattle(false);
    setRound(1);
  };

  const onNextPress = () => {
    if (testData.length - 1 == whoseTurn) {
      setRound((round) => round + 1);
      setWhoseTurn(0);
    } else {
      setWhoseTurn(whoseTurn + 1);
    }
  };

  const onNewCombatPress = () => {};

  const onNewCombatantPress = () => {};

  const onLoadCombatPress = () => {};

  const onLoadCombatantPress = () => {};

  const onPlusIconPress = () => {
    if (addingInit) {
      setAddingInit(false);
    }
    if (addingName) {
      setAddingName(false);
      setAddingInit(true);
    } else {
      setAddingName(true);
    }
  };

  const onResetPress = () => {
    setRound(0);
    setWhoseTurn(0);
    setPreBattle(true);
  };

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

  const NewCombatView = () => (
    <>
      <Text style={Styles.defaultText}>New Combat:</Text>
      <View style={{ borderColor: "red", borderWidth: 2 }}>
        <TouchableOpacity
          style={
            addingName ? Styles.addingName : addingInit ? Styles.addingInit : {}
          }
          onPress={onPlusIconPress}
        >
          <Text style={Styles.extraLargeText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={onNewCombatantPress}>
        <Text style={Styles.button}>NEW COMBATANTS</Text>
      </TouchableOpacity> */}
      <Text style={Styles.defaultText}>Recent:</Text>
    </>
  );

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

  const PreBattleView = () => (
    <>
      {!combatants ? (
        <>{isNewCombat() ? <NewCombatView /> : <CombatMenu />}</>
      ) : (
        <View>
          <Text style={Styles.defaultText}>--</Text>
          <TouchableOpacity onPress={onStartPress}>
            <Text style={Styles.button}>START</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );

  const CombatantList = () => (
    <View style={Styles.listArea}>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{"<no mobs yet>"}</Text>}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );

  return (
    <View style={Styles.container}>
      {preBattle && <PreBattleView />}
      {duringBattle && <DuringBattleView />}
      {addingCombatant && <AddingCombatantView />}
      {addingCombatant && <AddingCombatantView />}

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
      -display the list of current combatants if there is one (both pre and during battle)


      <View style={Styles.listArea}>
      
        <FlatList
          data={testData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <Text>{'<no mobs yet>'}</Text>}
          keyboardShouldPersistTaps="always"
        />
      </View> */}
    </View>
  );
};

export default CombatView;
