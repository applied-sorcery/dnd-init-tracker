import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "./ListItem";
import Styles from "../../Style";

//this is the list of added/ready fighters. it can be populated manually or
// by loading groups/individuals
const SavedCombatList = ({ savedCombats, onConfirmLoadCobmat }) => {
  const [combatList, setCombatList] = useState(savedCombats);

  //used by FlatList in <SavedCombats />
  const renderCombatListItem = ({ item }) => (
    <ListItem item={item} onPress={(item) => onConfirmLoadCobmat(item)} />
  );

  return (
    <View style={Styles.listArea}>
      <FlatList
        data={combatList}
        renderItem={renderCombatListItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={Styles.defaultText}>{"<no mobs yet>"}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default SavedCombatList;
