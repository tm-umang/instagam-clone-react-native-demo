import { StatusBar } from "react-native";
import React from "react";

const StatusBarField = ({backgroundColor}) => {
  return (
    <StatusBar barStyle="light-content" backgroundColor={backgroundColor}/>
  );
};
export default StatusBarField;