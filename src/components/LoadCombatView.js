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

const LoadCombatView = ({ savedCombats, onConfirmLoadCobmat }) => {
  //This list of saved combats is just hard coded test data. There are no real saved combats.
  //todo: fix save/load functionality within one session (was broken by implementing navigation/screens)
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

export default LoadCombatView;
