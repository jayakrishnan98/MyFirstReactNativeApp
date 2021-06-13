import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

const addGoalHandler = ()=>{
  props.onAddGoal(enteredGoal)
  setEnteredGoal('');
}

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputField}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="Cancel" color = "red" onPress = {props.onCancel} />
        {/* () => props.onAddGoal(enteredGoal) */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    borderColor: "grey",
    borderBottomWidth: 5,
    width: "70%",
    padding: 10,
  },
});

export default GoalInput;
