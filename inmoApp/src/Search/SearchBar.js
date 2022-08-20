import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchBar(){ 
return(

<SafeAreaView>
<TextInput 
style={styles.input}
placeholder="Que busca?"
value="{text}"
/>
    
</SafeAreaView>

);
};

const styles = StyleSheet.create({
    input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    }
    
    
})