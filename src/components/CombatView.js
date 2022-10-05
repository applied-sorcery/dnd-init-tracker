/**
 * -every person in the list of combatants should have an init score, check if they do. if they don't: can't start the combat
 * -the list of combatants should be sorted by init score
 * -"whoseTurn" state var gets set to 0, the first index of the sorted  combatants array. it will always correspond to an array index
 * -setWhoseTurn gets called to update whose turn it is whenever the next button gets pressed (whoseTurn + 1)
 * 
 */

import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import ListItem from './ListItem.js';

import Styles from '../../Style';

const baseUrl = 'http://dnd5eapi.co';

const CombatView = ({navigation, combatants}) => {
  //mock data:
  const [round, setRound] = useState(0)
  const [whoseTurn, setWhoseTurn] = useState(0);
  const [preBattle, setPreBattle] = useState(true);
  const [savedCombats, setSavedCombats] = useState([]);
  const [testData, settestData] = useState(
    [
      {id: '1', name: 'tim', initScore: 2},
      {id: '2', name: 'katie', initScore: 20},
      {id: '3', name: 'todd', initScore: 19},
      {id: '4', name: 'sarah', initScore: 13},
    ]
  );

  const isNewCombat = ()=>
    (savedCombats == 0);
  

  const renderItem = ({item}) => (
    <ListItem
      item={item}
      myTurn={testData.indexOf(item) == whoseTurn &&  !preBattle? true : false}
    />
  );

  const onStartPress = () => {
    setPreBattle(false);
    setRound(1);
 };


  const onNextPress = () => {
     if(testData.length-1 == whoseTurn){
       setRound((round)=> round+1);
       setWhoseTurn(0);
     } else {
      setWhoseTurn(whoseTurn+1);}
  };


  return (
    testData ?
    <View style={Styles.container}>
      
      <Text style={Styles.defaultText}>{preBattle ? "--": "Round: " + round}</Text>
      
      {/* {isNewCombat() ? <NewCombatView />: <LoadCombatView />} */}
      <View style={Styles.listArea}>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{'<no mobs yet>'}</Text>}
        keyboardShouldPersistTaps="always"
      />
      </View>
      <TouchableOpacity onPress={preBattle ? onStartPress :onNextPress}>
      <Text style={Styles.defaultText}>{preBattle ? 'START' :'NEXT'}</Text>
        </TouchableOpacity>
    </View> : null
  );
};

export default CombatView;
