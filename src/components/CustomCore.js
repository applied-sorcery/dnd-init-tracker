import React from "react";
import {
  Modal,
  Text,
} from "react-native";

/* 
* No default exports in this file. Import components with:
*
*  import {Component1, Component2} from './CustomCore.js';
*/

export const BaseText = (props) => {
  return (
    <Text style={[
      {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
      },
      props.style
    ]}>   
      {props.children}
    </Text>
  );
}
    
export const Header = (props) => {
  return (
    <Text style={[
      {
        fontSize: 30,
        marginBottom: 30,
        color: 'white',
      },
      props.style
    ]}>   
      {props.children}
    </Text>
  );
}
 
