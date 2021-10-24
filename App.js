import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList } from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {


  const [goals, setGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);

  const addGoal = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoal = goalId => {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== goalId);
    })
  }
  
  

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} /> 
      <GoalInput visible={isAddMode} onAddGoal={(addGoal)}/>
      <FlatList
      keyExtractor={(item,index) => item.id} 
       data={goals}
        renderItem={itemData => <GoalItem id={itemData.item.id}  onDelete={removeGoal} title={itemData.item.value}/>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});