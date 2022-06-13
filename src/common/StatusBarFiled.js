import { StatusBar } from "react-native";
import React from "react";

const StatusBarField = ({backgroundColor}) => {
  return (
    <StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
  );
};
export default StatusBarField;