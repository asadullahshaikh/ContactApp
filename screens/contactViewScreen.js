import React, {useEffect, useState, useCallback, createContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button,
  TextInput,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fetchContact, deleteContact} from '../helpers/db';
const Wrap = createContext();
const ContactViewScreen = (props) => {
  const [data, setData] = useState();
  const [dubData, setDubData] = useState();
  const [index, setIndex] = useState(null);

  const loadData = useCallback(async () => {
    try {
      const data = await fetchContact();
      setData(data);
      setDubData(data);
    } catch (err) {
      console.log(err);
    }
  });
  useEffect(() => {
    loadData();
  }, [deleteHandler]);

  const deleteHandler = (id) => {
    deleteContact(id);
    loadData();
  };
  if (data === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Add some contacts</Text>
      </View>
    );
  }
  const search = (text) => {
    const filtered = dubData.filter((item) => {
      let firstName = item.firstName.toLowerCase();
      let lastName = item.lastName.toLowerCase();
      return firstName.indexOf(text) != -1 || lastName.indexOf(text) != -1;
    });
    setData(filtered);
    // console.log(text);
  };
  return (
    <Wrap.Provider value={loadData}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="search"
            style={styles.searchIn}
            onChangeText={(t) => search(t)}
          />
          <View style={styles.searchImg}>
            <Icon name="search" size={35} />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => (
            <TouchableNativeFeedback
              style={styles.Touch}
              onPress={() => setIndex(index ? null : itemData.index)}>
              <View style={styles.displayView}>
                <Text style={styles.txt}>
                  {itemData.item.firstName + ' ' + itemData.item.lastName}
                </Text>
                <Text style={styles.txt}>{itemData.item.number}</Text>
                <View
                  style={{
                    display: index == itemData.index ? 'flex' : 'none',
                    backgroundColor: 'white',
                  }}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                    }}
                    onPress={() => deleteHandler(itemData.item.id)}>
                    <Text style={{fontSize: 18, paddingTop: 10}}>DELETE</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.renderIcon}>
                  <Icon.Button
                    color="black"
                    backgroundColor="white"
                    name="edit"
                    size={40}
                    onPress={() =>
                      props.navigation.navigate('editContact', {
                        number: itemData.item.number,
                        firstName: itemData.item.firstName,
                        lastName: itemData.item.lastName,
                        ID: itemData.item.id,
                        fun: loadData,
                      })
                    }
                  />
                </View>
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    </Wrap.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
  },

  renderIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
  },

  searchBox: {
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
  },
  searchImg: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    ...StyleSheet.absoluteFill,
  },
  searchImgage: {
    width: '20%',
    height: '50%',
  },
  searchIn: {
    fontWeight: 'bold',
  },
  displayView: {
    paddingTop: 20,
    margin: 5,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export {ContactViewScreen, Wrap};
