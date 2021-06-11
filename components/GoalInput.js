import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputField}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> 
      {/* () => props.onAddGoal(enteredGoal) */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
