import React from "react";
import { ScrollView } from "react-native";
import Gallery from "../gallery/Gallery";
import SearchBar from "../Search/SearchBar";


export default function Home(){
    return (
        <>
        <SearchBar />
        <ScrollView>
        <Gallery />
        </ScrollView>
        
        </>
    )
}
