import React, { useState } from 'react';
import {View,Text,TextInput, StyleSheet, TouchableHighlight} from 'react-native';


const goalItem = props => {
    return (
      <TouchableHighlight onPress={props.onDelete.bind(this,props.id)}>
        <View style = {styles.listItems}>
        <Text>{props.title}</Text>
      </View>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listItems: { 
        padding:10,
        marginVertical : 10,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderWidth : 1
      }
})

export default goalItem;