import React from "react";
import {
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  textInput: {
    backgroundColor: "#666",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    marginBottom: 0,
  },
  ctrlBtnText: {
    textAlign: "center",
    color: "#a5a0a0",
    fontSize: 16,
    letterSpacing: 1.2,
    margin: 0,
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
    color: 'white',
  },
  button: {
    alignItems: "center",
    width: "75%",
    backgroundColor: "#3399ff",
    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },
  ctrlBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 5,
    minWidth: '10%',
  },
});


/* 
* No default exports in this file. Import these components in other files with:
*
*  import {Component1, Component2} from './CustomCore.js';
*/

export const AppText = (props) => {
  return (
    <Text style={[
      styles.text,
      props.style
    ]}>   
      {props.children}
    </Text>
  );
}
    
export const Header = (props) => {
  return (
    <Text style={[
      styles.text,
      styles.header,
      props.style
    ]}>   
      {props.children}
    </Text>
  );
}
 
/* Button text goes inside <AppButton></AppButton> */
export const AppButton = (props) => {
  return (
    <Pressable 
      onPress={props.onPress}
      style={[
        styles.button,
        props.style
    ]}>
      <Text
        style={[
          styles.text,
          styles.btnText,
        ]}>
        {props.children}
      </Text>
    </Pressable>
  );
}

export const AppTextInput = (props) => {
  return (
    <TextInput
      style={[styles.text, styles.textInput]}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  );
}

export const CtrlBtn = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.ctrlBtn,
        props.style
      ]}
      onPress={props.onPress}
    >
      <Text style={[
          styles.text,
          styles.ctrlBtnText,
          props.textStyle,
        ]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

