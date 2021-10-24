import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Modal } from 'react-native';

const goalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalEntered = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalEntered}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom :10
  }

})


export default goalInput;