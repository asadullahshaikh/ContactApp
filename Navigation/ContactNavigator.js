import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactViewScreen} from '../screens/contactViewScreen';
import AddContact from '../screens/addContactScreen';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import EditContact from '../screens/editContact';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({route, navigation}) => ({
            headerTitle: 'Contact View',
            headerTitleAlign: 'center',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="add"
                  color="black"
                  size="30"
                  onPress={() => {
                    navigation.navigate('addContact');
                  }}
                />
              </HeaderButtons>
            ),
            headerStyle: {
              backgroundColor: '#c0c0c0',
            },
          })}
          name="contactView"
          component={ContactViewScreen}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerTitle: 'ADD Contact ',
            headerTitleAlign: 'center',

            headerStyle: {
              backgroundColor: '#c0c0c0',
            },
          })}
          name="addContact"
          component={AddContact}
        />

        <Stack.Screen
          options={({navigation}) => ({
            headerTitle: 'Edit Contact ',
            headerTitleAlign: 'center',

            headerStyle: {
              backgroundColor: '#c0c0c0',
            },
          })}
          name="editContact"
          component={EditContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
