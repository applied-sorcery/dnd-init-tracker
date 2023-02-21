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
  //it's important to note here that this list of saved combats is just hard coded test data. There are no real saved combats.
  //we need to fix save/load functionality, as it was broken when migrating to drawer navigation.
  const [combatList, setCombatList] = useState([
    {
      id: 1,
      name: "my combat 1",
      fighters: [
        { name: "fighter-1", initScore: 2, id: 1 },
        { name: "fighter-2", initScore: 3, id: 2 },
      ],
      round: 0,
      whoseTurn: 0,
    },
  ]);

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
