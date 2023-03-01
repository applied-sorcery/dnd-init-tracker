import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable
} from "react-native";
import Styles from "../../Styles";
import { AppText, AppButton, Header } from "./CustomCore";
import { ThisIsAContext } from "./ThisIsAContext";

const LoadCombatView = ({  navigation }) => {
  const { state, setState} = useContext(ThisIsAContext);

  const renderCombatListItem = ({ item }) => (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
    <Pressable 
      style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}
      onPress={() => {
        //This is one way to update state after loading. Another, possibly better way would be pass the item.id 
        //back as route param below * using the navigation object provided by react native navigation (our stack nav).
        setState({...state, combatObject: item});  
        console.log(item)
        navigation.navigate("Combat Container"
        /*  (see note above * this is where the route param would go then the right component could load the 
        combat based on the id and we don't have to pass around the whole object.) , {id: item.id} */);
      }}>
      <AppText>{item.name}</AppText>
    </Pressable>
    <View>
      <Pressable onPress={ () => {
        setState({  
        ...state, savedCombats: [
          ...state.savedCombats.filter( (sc) => 
            item.id !== sc.id 
          )
        ]
        })
      }
      }>
        {/* todo:  are you SuUuRrEe you want to delete this combat??*/}
        <AppText>{"[DELETE]"}</AppText>
      </Pressable>
    </View>
  
  </View>

    
  );

  return (
    <View style={Styles.container}>
      <Header>My Combats</Header>
      <View style={[
          Styles.fighterListWrapper,
          {
            height: 400,
          },
        ]}>
        <FlatList
          data={state.savedCombats}
          renderItem={renderCombatListItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <AppText>{"[no saved combats yet]"}</AppText>
          )}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </View>
  );
};

export default LoadCombatView;
