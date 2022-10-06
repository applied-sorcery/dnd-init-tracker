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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { kStringMaxLength } from "buffer";
import Styles from "../../Style";

const MonsterStatsView = ({ route, navigation }) => {
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
      <View style={Styles.container}>
        <Text style={Styles.defaultText}>
          Strength: {currentMonster.strength}
        </Text>
        <Text style={Styles.defaultText}>
          Dexterity: {currentMonster.dexterity}
        </Text>
        <Text style={Styles.defaultText}>
          Constitution: {currentMonster.constitution}
        </Text>
        <Text style={Styles.defaultText}>
          Intelligence: {currentMonster.intelligence}
        </Text>
        <Text style={Styles.defaultText}>Wisdom: {currentMonster.wisdom}</Text>
        <Text style={Styles.defaultText}>
          Charisma: {currentMonster.charisma}
        </Text>
      </View>

      <Text>Challenge Rating: {currentMonster.challenge_rating}</Text>
      <Text>Alignment: {currentMonster.alignment}</Text>
      <Text>Type: {currentMonster.type}</Text>
    </View>
  );
};
