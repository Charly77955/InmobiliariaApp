import React from 'react';
import {Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Inmuebles from '../data/Data.json';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBed, faBath, faWarehouse} from '@fortawesome/free-solid-svg-icons';


export default function Gallery() {
  return (
    <>
      {Inmuebles.Inmuebles.map((item, i) => (
        <SafeAreaView key={i} style={styles.container}>
          <FontAwesomeIcon icon={faBed} 
          style={styles.iconBed}/>
          <FontAwesomeIcon icon={faBath} 
          style={styles.iconBath}/>
          <FontAwesomeIcon icon={faWarehouse} 
          style={styles.warehouse}/>
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
    width: 150,
    height: 140,
    margin: 10,
    flex: 1,
    left: 10,
    borderWidth: 1,
    borderColor: '#2a4944'
  },
  iconBed:{
     color:"#000000",
     left: 230,
     bottom: 100
  },
  iconBath: {
    left: 280,
    bottom: 117
  },
  warehouse:{
    left: 320,
    bottom: 130
  }
});
