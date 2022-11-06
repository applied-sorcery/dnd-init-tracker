import React, { useState } from "react";

import {
  Modal,
  View,
} from "react-native";

import {
  AppText,
  Header,
  AppButton,
  AppTextInput,
  Confirm,
} from './CustomCore.js';

const AddFighterView = ({
  onAddFighterSubmit,
  newFighterId,
  addFighterModalVisible,
  setAddFighterModalVisible,
}) => {

  const [newFighter, setNewFighter] = useState({
    id: 0,
    name: "NA",
    initScore: "0",
  });

  return (
    <Confirm
      visible={addFighterModalVisible}
      confirmText="Add"
      onRequestClose={() => {
        setAddFighterModalVisible(false);
      }}
      onConfirm={() => {
        onAddFighterSubmit({
          ...newFighter,
          id: newFighterId(),
        });
        setAddFighterModalVisible(false);
      }}
    >
      
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

    </Confirm>
  );

} //AddFighterView

export default AddFighterView;
