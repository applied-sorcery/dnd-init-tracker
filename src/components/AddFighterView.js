import React, { useState } from "react";
import {
  Modal,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import ListItem from "./ListItem.js";

const AddFighterView = ({
  onAddFighterSubmit,
  newFighterId,
  addFighterModalVisible,
  setAddFighterModalVisible,
}) => {
  // Add Fighter
  // const [modalVisible, setModalVisible] = useState(visible);
  const [newFighter, setNewFighter] = useState({
    id: newFighterId(),
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
    },
    input: {
      backgroundColor: "#666",
      marginBottom: 30,
    },
    header: {
      fontSize: 30,
      marginBottom: 30,
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
          <Text style={styles.header}>Create a new fighter</Text>
          <Text style={styles.text}>Fighter Name:</Text>
          <TextInput
            style={[styles.text, styles.input]}
            placeholder="Name of player or enemy"
            onChangeText={(name) => {
              setNewFighter({ ...newFighter, name: name });
            }}
          />
          <Text style={styles.text}>Initiative Score:</Text>
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
                onAddFighterSubmit(newFighter);
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
