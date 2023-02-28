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
import { AppText, AppButton } from "./CustomCore";
import { ThisIsAContext } from "./ThisIsAContext";

const LoadCombatView = ({ savedCombats, onConfirmLoadCobmat, navigation }) => {
  const [combatList, setCombatList] = useState({id: 0, name: "dummy"});
  const { state, setState} = useContext(ThisIsAContext);

  const renderCombatListItem = ({ item }) => (
    <Pressable onPress={() => {
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
    
  );

  return (
    <View style={Styles.container}>
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
  );
};

export default LoadCombatView;
