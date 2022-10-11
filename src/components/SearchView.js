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
import InfoView from "./InfoView.js";
//import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon from "react-native-vector-icons/MaterialIcons";
//import Icon from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Styles from "../../Style.js";
import { useDispatch, useSelector } from "react-redux";
import { addMonster, removeMonster, loadMonsters } from "../redux/reducer";

const baseUrl = "http://dnd5eapi.co";

const SearchView = ({ navigation }) => {
  const monsters = useSelector((state) => state.allMonsters);
  const fighters = useSelector((state) => state.fighters);

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromApiAsync("http://dnd5eapi.co/api/monsters").then((result) => {
      dispatch(loadMonsters(result));
    });
  }, []);

  async function getDataFromApiAsync(url) {
    try {
      let response = await fetch(url);
      let json = await response.json();
      return json.results;
    } catch (error) {
      console.error(error);
    }
  }

  const onInfoPress = (id) => {
    navigation.navigate("Info", {
      url: baseUrl + monsters.filter((el) => el.id === id)[0].url,
    });
  };

  const onPlusPress = (id) => {
    dispatch(addMonster(id));
  };

  const onMinusPress = (id) => {
    dispatch(removeMonster(id));
  };

  // const removeMonster = (id) => {
  //   setMonsters((prev) =>
  //     prev.map((el) =>
  //       el.id == id ? {...el, quantity: (el.quantity -= 1)} : el,
  //     ),
  //   );
  //   setCombatants((prev) => monsters.filter((el) => el.quantity > 0));
  // };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      addItem={() => onPlusPress(item.id)}
      removeItem={() => onMinusPress(item.id)}
      onInfoPress={onInfoPress}
    />
  );

  const onSearchInput = (text) => {
    setSearchTerm(text);
  };

  const clearSearchTerm = () => setSearchTerm("");

  const getListData = () =>
    searchTerm == ""
      ? null
      : monsters.filter((li) => li.name.match(new RegExp(searchTerm, "i")));

  const renderCombatants = () => (
    <View>
      <View>
        <Text style={Styles.defaultText}>My Mobs:</Text>
      </View>
      {/* this list is for the mobs you've already added from searches */}
      <FlatList
        data={fighters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{"<no mobs yet>"}</Text>}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );

  return (
    <View style={Styles.container}>
      <SafeAreaView style={Styles.safeArea} />
      <View style={Styles.searchView}>
        <TouchableOpacity onPress={clearSearchTerm}>
          <Icon name="arrow-back" color="#fff" size={26} />
        </TouchableOpacity>
        <TextInput
          style={Styles.searchTextInput}
          value={searchTerm}
          placeholderTextColor={"#fff"}
          placeholder="Search for fighters to add..."
          onChangeText={onSearchInput}
          keyboardType="visible-password"
          multiline={false}
          theme={{ colors: { primary: "red" } }}
        />
        {/* <Icon name="clear" color="#fff" size={36} /> */}
        {searchTerm ? (
          <TouchableOpacity onPress={clearSearchTerm}>
            <Icon name="cancel" color="#fff" size={26} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={Styles.listArea}>
        {/* the list below is for the search results*/}
        <FlatList
          data={getListData()}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          ListEmptyComponent={() => renderCombatants()}
          keyboardShouldPersistTaps="always"
        />
      </View>
      <View style={Styles.buttonView}></View>
    </View>
  );
};

export default SearchView;
