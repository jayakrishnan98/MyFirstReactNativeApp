import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{padding: 70}}>
      <View>
        <TextInput placeholder="Course Goal" 
        style={{ borderColor: 'black', borderBottomWidth: 1}}/>
        <Button title="ADD"/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
