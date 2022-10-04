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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {kStringMaxLength} from 'buffer';

const MonsterStatsView = ({route, navigation}) => {
  const [currentMonster, setCurrentMonster] = useState({});

  useEffect(() => {
    

    getDataFromApiAsync(route.params.url).then((result) => {
      let info = (({
        strength,
        dexterity,
        constitution,
        intelligence,
        charisma,
        wisdom,
        challenge_rating,
        type,
        alignment,
      }) => ({
        strength,
        dexterity,
        constitution,
        intelligence,
        charisma,
        wisdom,
        challenge_rating,
        type,
        alignment,
      }))(result);
      setCurrentMonster((prevData) => info);
    });
  }, []);

  async function getDataFromApiAsync(url) {
    try {
      let response = await fetch(url);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Text>Stats:</Text>
      <View style={styles.attributesView}>
        <Text>Strength: {currentMonster.strength}</Text>
        <Text>Dexterity: {currentMonster.dexterity}</Text>
        <Text>Constitution: {currentMonster.constitution}</Text>
        <Text>Intelligence: {currentMonster.intelligence}</Text>
        <Text>Wisdom: {currentMonster.wisdom}</Text>
        <Text>Charisma: {currentMonster.charisma}</Text>
      </View>

      <Text>Challenge Rating: {currentMonster.challenge_rating}</Text>
      <Text>Alignment: {currentMonster.alignment}</Text>
      <Text>Type: {currentMonster.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f363c',
    flex: 1,
  },
  searchView: {
    paddingRight: 15,
    flexDirection: 'row',
    backgroundColor: '#251c1c',
    borderBottomWidth: 4,
    borderBottomColor: '#3d2e2e',
    height: 64,
    alignItems: 'center',
    borderRadius: 40,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    padding: 10,
    color: 'white',
  },

  monsterListHeader: {
    flexDirection: 'row',
    marginTop: 40,
  },

  searchResultsList: {},

  monsterList: {
    backgroundColor: '#fff',
  },

  MonsterListView: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MonsterStatsView;
