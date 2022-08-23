import React from 'react';
import {Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Inmuebles from '../data/Data.json';

export default function Gallery() {
  return (
    <>
    
      {Inmuebles.Inmuebles.map((item, i) => (
        <SafeAreaView key={i} style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <TouchableOpacity>
            <Image source={{uri: item.imagen}} alt="" style={styles.imgStyle} />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      ))}
      
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: "#4D5654"
    },
  scrollView: {
    marginHorizontal: 50,
    backgroundColor: '#74807D',
    flexDirection: 'column',
    marginBottom: 20,
   
  },
  textStyle: {
    fontSize: 17,
    paddingTop: 2,
    color: 'white',
    left: 20,
  },
  imgStyle: {
    width: 270,
    height: 180,
    margin: 10,
    flex: 1,
    left: 10,
    borderWidth: 1,
    borderColor: '#2a4944'
  },
});
