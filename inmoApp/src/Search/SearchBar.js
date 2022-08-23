import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <SafeAreaView>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{
          top: 40,
          left: 10,
          width: 30,
        }}
      />

      <TextInput style={styles.input} placeholder="Que busca?" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#AFBBB7',
    borderRadius: 30,
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: 20,
  },
});
