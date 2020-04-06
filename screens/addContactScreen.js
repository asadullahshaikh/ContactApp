import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';

import ContactList from '../components/contactList';
import {insertContact} from '../helpers/db';

const addContactScreen = (props) => {
  const [fN, setFN] = useState('');
  const [lN, setlN] = useState('');
  const [num, setNum] = useState('');

  const submitHandler = async () => {
    console.log(fN, lN, num);
    try {
      const data = await insertContact(fN, lN, num);
      setFN(''), setFN(''), setNum('');
      props.navigation.navigate('contactView');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props);
  return (
    <View style={styles.container}>
      <ContactList
        fN={fN}
        lN={lN}
        num={num}
        submitHandler={submitHandler}
        setFN={setFN}
        setlN={setlN}
        setNum={setNum}
        title="Add Contact"
        btn="Save Contact"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
  },
});
export default addContactScreen;
