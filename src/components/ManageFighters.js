import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const FighterScreen = () => {
  const [fighters, setFighters] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newFighterName, setNewFighterName] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  const saveFighter = () => {
    // Code to save new fighter
    setFighters([...fighters, { name: newFighterName }]);
    setNewFighterName('');
  };

  const saveGroup = () => {
    // Code to save new group
    setGroups([...groups, { name: newGroupName, fighters: [] }]);
    setNewGroupName('');
  };

  const editFighter = (fighter) => {
    // Code to edit fighter
    setSelectedFighter(fighter);
  };

  const editGroup = (group) => {
    // Code to edit group
    setSelectedGroup(group);
  };

  const renderFighterItem = ({ item }) => (
    <TouchableOpacity onPress={() => editFighter(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderGroupItem = ({ item }) => (
    <TouchableOpacity onPress={() => editGroup(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const filteredFighters = fighters.filter((fighter) => fighter.name.includes(searchText));
  const filteredGroups = groups.filter((group) => group.name.includes(searchText));

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={(text) => setSearchText(text)}
      />
      <View>
        <TouchableOpacity onPress={() => setTabIndex(0)}>
          <Text>Fighters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabIndex(1)}>
          <Text>Groups</Text>
        </TouchableOpacity>
      </View>
      {tabIndex === 0 && (
        <View>
          <FlatList
            data={filteredFighters}
            renderItem={renderFighterItem}
            keyExtractor={(item) => item.id}
          />
          <TextInput
            placeholder="New Fighter Name"
            value={newFighterName}
            onChangeText={(text) => setNewFighterName(text)}
          />
          <TouchableOpacity onPress={saveFighter}>
            <Text>Save Fighter</Text>
          </TouchableOpacity>
        </View>
      )}
      {tabIndex === 1 && (
        <View>
          <FlatList
            data={filteredGroups}
            renderItem={renderGroupItem}
            keyExtractor={(item) => item.id}
          />
          <TextInput
            placeholder="New Group Name"
            value={newGroupName}
            onChangeText={(text) => setNewGroupName(text)}
          />
          <TouchableOpacity onPress={saveGroup}>
            <Text>Save Group</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedFighter && (
        <View>
          <Text>Edit Fighter: {selectedFighter.name}</Text>
          {/* Add form to edit fighter */}
        </View>
      )}
      {selectedGroup && (
        <View>
          <Text>Edit Group: {selectedGroup.name}</Text>
          {/* Add form to edit group */}
        </View>
      )}
    </View>
  );
};

export default FighterScreen;