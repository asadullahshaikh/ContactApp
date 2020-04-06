import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const ContactList = (props) => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput
          value={props.fN}
          placeholder="First Name"
          style={styles.input}
          onChangeText={(t) => props.setFN(t)}
        />
        <TextInput
          value={props.lN}
          placeholder="Last Name"
          style={styles.input}
          onChangeText={(t) => props.setlN(t)}
        />
        <TextInput
          value={props.num}
          placeholder="Number"
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={(t) => props.setNum(t)}
        />
      </View>
      <TouchableOpacity
        onPress={props.submitHandler}
        activeOpacity={0.5}
        style={styles.btn}>
        <Text style={styles.btnT}>{props.btn}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    elevation: 5,
    margin: 10,
    backgroundColor: 'white',

    borderRadius: 10,
  },
  input: {
    fontWeight: 'bold',
    margin: 10,
  },
  title: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: Dimensions.get('window').width / 3,
  },
  titleText: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
  },
  btnT: {
    color: 'black',
  },
});
export default ContactList;
