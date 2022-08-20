import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { SafeAreaView, View } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function SearchBar(){ 
return(

<SafeAreaView>
<FontAwesomeIcon icon={faMagnifyingGlass} />

<TextInput 
FontAwesomeIcon icon={faMagnifyingGlass} 
style={styles.input}
placeholder="Que busca?"
/>

</SafeAreaView>

);
};

const styles = StyleSheet.create({
    input:{
    backgroundColor: '#AFBBB7',
    borderRadius: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    }
    
    
})