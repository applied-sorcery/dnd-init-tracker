import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
} from "react-native";
import ListItem from "./ListItem.js";
import {AppText, Header, AppButton, AppTextInput} from './CustomCore.js';

const AddFighterView = ({
  combatObject,
  onAddFighterSubmit,
  newFighterId,
  addFighterModalVisible,
  setAddFighterModalVisible,
}) => {
  // Add Fighter
  const [newFighter, setNewFighter] = useState({
    id: 0,
    name: "NA",
    initScore: "0",
  });

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
    /*
    input: {
      backgroundColor: "#666",
      marginBottom: 30,
    },
    */
    btnWrapper: {
      alignItems: "center",
      marginTop: 30,
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
          <AppText>Fighter Name:</AppText>
          <AppTextInput
            placeholder="Name of player or enemy"
            onChangeText={(name) => {
              setNewFighter({ ...newFighter, name: name });
            }}
          />
          <AppText>Initiative Score:</AppText>
          <AppTextInput
            keyboardType="numeric"
            placeholder="0"
            onChangeText={(initScore) => {
              setNewFighter({ ...newFighter, initScore: initScore });
            }}
          />
          <View style={styles.btnWrapper}>
            <AppButton
              onPress={() => {
                onAddFighterSubmit({
                  ...newFighter,
                  id: combatObject.fighters.length + 1,
                });
                setAddFighterModalVisible(false);
              }}
            >Submit
            </AppButton>
            <AppButton
              onPress={() => setAddFighterModalVisible(false)}
            >Cancel
            </AppButton>
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
} // Add Fighter

export default AddFighterView;
