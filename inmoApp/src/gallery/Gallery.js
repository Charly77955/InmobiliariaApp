import React from 'react';
import {Text, Image, StyleSheet, ScrollView, TouchableOpacity, View, TextComponent} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Inmuebles from '../data/Data.json';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBed, faBath, faWarehouse, faLocationDot, faBookmark} from '@fortawesome/free-solid-svg-icons';


export default function Gallery() {
  return (
    <>
      {Inmuebles.Inmuebles.map((item, i) => (
        <SafeAreaView key={i} style={styles.container}>
          
          <ScrollView style={styles.scrollView}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <TouchableOpacity>
            <Image source={{uri: item.imagen}} alt="" style={styles.imgStyle} />
            <View style={styles.iconsContainer}>
          
              <Text style={styles.textBed}>3</Text>
              <Text style={styles.textBath}>2</Text>
              <Text style={styles.textWarehouse}>150m2</Text>
              <Text style={styles.textUbication}>Dasso 2321,CABA</Text>
              <Text style={styles.textPrice}>$510m2</Text>
          <FontAwesomeIcon icon={faBookmark} 
          style={styles.iconfaBookmark}/>
           <FontAwesomeIcon icon={faBed} 
          style={styles.iconBed}/>
          <FontAwesomeIcon icon={faBath} 
          style={styles.iconBath}/>
          <FontAwesomeIcon icon={faWarehouse} 
          style={styles.iconWarehouse}/>
          <FontAwesomeIcon icon={faLocationDot} 
          style={styles.iconLocation}/> 
          </View>
            </TouchableOpacity>

          </ScrollView>
          
          
        </SafeAreaView>
      ))}
      
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#4D5654"
    },
    scrollView :{  
        flex: 1,
        width: 340,
        height: 210,
        padding: 0,
        flexWrap: 'wrap',
        backgroundColor: '#74807D'
    },
    imgStyle: {
      width: 170,
      height: 150,
      margin: 5,
      flex: 1,
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: '#2a4944'
    },
    textStyle: {
      fontSize: 17,
      width:300,
      paddingTop: 2,
      color: 'white',
      fontWeight: 'bold',
      left: 5,
    },
    iconBed:{
      color:"#000000",
      left: 190,
      bottom: 187,
      width: 0,
      height: 0
   },
   iconBath: {
    left: 230,
    bottom: 204,
    width: 0,
    height: 0
  },
  iconWarehouse:{ 
    left: 270,
    bottom: 220,
    width: 0,
    height: 0,
    color:"#000000"
  },
  iconLocation:{
    left: 180,
    bottom: 305,
    width: 0,
    height: 0
  },
  iconsContainer:{
    width: 340,
    height: 210
  },
  textBed:{
    left: 210,
    color:"#000000",
    bottom: 73,
    fontWeight: 'bold'
  },
  textBath:{
    left: 250,
    bottom: 90,
    color:"#000000",
    fontWeight: 'bold'
  },
  textWarehouse: {
    left: 290,
    bottom: 110,
    color:"#000000",
    fontWeight: 'bold'
  },
  textUbication:{
    left: 200,
    bottom: 200,
    color:"#000000",
    fontWeight: 'bold'
  },
  iconfaBookmark:{
    left: 320,
    bottom: 120,
    width: 0,
    height: 0
  },
  textPrice:{
    left: 190,
    bottom: 110,
    color:"#000000",
    fontWeight: 'bold',
    fontSize: 18
  }
  
});
