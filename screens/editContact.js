import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import ContactList from '../components/contactList';
import {updateContact} from '../helpers/db';
import {Wrap} from './contactViewScreen';
const editContact = (props) => {
  const [fN, setFN] = useState('');
  const [lN, setlN] = useState('');
  const [num, setNum] = useState('');

  const submitHandler = async () => {
    try {
      await updateContact(fN, lN, num, props.route.params.ID);
      props.route.params.fun();
      props.navigation.navigate('contactView');
      <Wrap.Consumer>{(value) => value.loadData()}</Wrap.Consumer>;
    } catch (err) {
      console.log(err, 'error');
    }
  };

  useEffect(() => {
    setFN(props.route.params.firstName), setlN(props.route.params.lastName);
    setNum(props.route.params.number.toString());
  }, []);
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
        title="Edit Contact"
        btn="Update Contact"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '95%',
  },
});
export default editContact;
