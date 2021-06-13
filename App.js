import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(() => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]); //we can also use key instead of id. But try "uid" and you'll see the warning though.
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });  

  };

  return (
    <View style={styles.screen}>
      <Button title = "Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput visible = {isAddMode} onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => {
          item.id;
        }}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            title={itemData.item.value}
            id={itemData.item.id} //converted key to id because only id worked here
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
