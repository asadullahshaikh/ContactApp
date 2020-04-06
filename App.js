import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ContactNavigator from './Navigation/ContactNavigator';
import {init} from './helpers/db';

init()
  .then(() => {
    console.log('Initialized Database');
  })
  .catch((err) => {
    console.log('went wrong');
    console.log(err);
  });

const App = () => {
  return (
    <View style={styles.container}>
      <ContactNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '95%',
  },
});

export default App;
