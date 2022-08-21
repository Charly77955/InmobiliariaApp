import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Inmuebles from "../data/Data.json";


export default function Gallery(){
    return(
        <>
        {Inmuebles.Inmuebles.map((Inmuebles) => (   
                <SafeAreaView key={Inmuebles.id}>
                 <Text>{Inmuebles.name}{"\n"}</Text>
                 <Image source={Inmuebles.imagen}/> 
                </SafeAreaView>  

        ))}
        </>
        
    );
};