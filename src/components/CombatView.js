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

const CombatView = ({navigation, renderItem, combatants}) => {
  //mock data:
  const [testData, settestData] = useState([
    [
      {id: '1', name: 'tim'},
      {id: '2', name: 'katie'},
      {id: '3', name: 'todd'},
      {id: '4', name: 'sarah'},
    ],
  ]);
  return (
    <View style={Styles.container}>
      <Text style={Styles.defaultText}>This is the combat view</Text>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{'<no mobs yet>'}</Text>}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default CombatView;
