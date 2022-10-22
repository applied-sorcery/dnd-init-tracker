import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Text,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import ListItem from "./ListItem.js";
import {BaseText, Header} from './CustomCore.js';

const AddFighterView = ({
  combatObject,
  onAddFighterSubmit,
  newFighterId,
  addFighterModalVisible,
  setAddFighterModalVisible,
}) => {
  // Add Fighter
  // const [modalVisible, setModalVisible] = useState(visible);
  const [newFighter, setNewFighter] = useState({
    id: 0,
    name: "NA",
    initScore: "0",
  });

  // const setAddFighterModalVisible = {};

  const styles = StyleSheet.create({
    container: {
      // top padding or margin crashes app
      height: "100%",
      backgroundColor: "black",
    },
    content: {
      marginHorizontal: 25,
      marginVertical: 50,
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      color: 'white',
    },
    input: {
      backgroundColor: "#666",
      marginBottom: 30,
    },
    header: {
      fontSize: 30,
      marginBottom: 30,
      color: 'white',
    },
    btnWrapper: {
      alignItems: "center",
      marginTop: 30,
    },
    button: {
      alignItems: "center",
      width: "75%",
      backgroundColor: "#3399ff",
      marginBottom: 20,
      paddingVertical: 10,
      borderRadius: 2,
    },
    btnText: {
      fontSize: 15,
      textTransform: "uppercase",
      color: "white",
      fontWeight: "500",
    },
  });

  return (
    <Modal
      animationType="slide"
      visible={addFighterModalVisible}
      onRequestClose={() => {
        setAddFighterModalVisible(!addFighterModalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Header>Create a new fighter</Header>
          <BaseText>Fighter Name:</BaseText>
          <TextInput
            style={[styles.text, styles.input]}
            placeholder="Name of player or enemy"
            onChangeText={(name) => {
              setNewFighter({ ...newFighter, name: name });
            }}
          />
          <BaseText>Initiative Score:</BaseText>
          <TextInput
            style={[styles.text, styles.input]}
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(initScore) => {
              setNewFighter({ ...newFighter, initScore: initScore });
            }}
          />
          <View style={styles.btnWrapper}>
            <Pressable
              style={styles.button}
              onPress={() => {
                onAddFighterSubmit({
                  ...newFighter,
                  id: combatObject.fighters.length + 1,
                });
                setAddFighterModalVisible(false);
              }}
            >
              <Text style={styles.btnText}>Submit</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => setAddFighterModalVisible(false)}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
          </View>
          {/* Monitor values for input and submit
            <Text style={{fontSize:30}}>Input: {newFighter['name']}</Text>
            <Text style={{fontSize:30}}>Submit: {
              fighters.length > 0 && fighters[fighters.length - 1]['name']
            }</Text>
            */}
        </View>
      </View>
    </Modal>
  );
}; // Add Fighter

export default AddFighterView;
