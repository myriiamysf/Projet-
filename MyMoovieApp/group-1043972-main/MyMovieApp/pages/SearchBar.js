import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function SearchBar(){

    const [text, onChangeText] = useState('')
    const API_KEY = '0e4f595e21df030ae208acbc86a5a227';
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;
    const [ movies, setMovies] = useState();


    const searchMovies = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
         .then(response => response.json())
         .then(data => setMovies(data.results))
         .catch(error => console.error(error));
       };

    return (
        <View style={styles.Main}>
            <TextInput placeholder='Recherche' style={styles.textin} onChangeText={ () =>searchMovies(text) }/>
        </View>
)
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'#FFF',
        width: 300,
        height:30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C0C0C0'
    },
    textin:{
        margin: 8
    }

})