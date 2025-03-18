
import {React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';

export default function List({navigation}) {

  
  const API_KEY = '0e4f595e21df030ae208acbc86a5a227';
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;

  const [ movies, setMovies] = useState()

  useEffect(() => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    console.log(data.results); // Affiche les films dans la console
    setMovies(data.results); // Stocke les films dans le state
    })
    .catch(error => console.error(error));
  }, []);



  return (
  <View style={styles.container}>
     <View style={styles.BG}>
        <SearchBar/>
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={movies} // movies est le tableau contenant les films
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <View style={styles.backposter}> 
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { movies : item}
              )}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
              </TouchableOpacity>
            </View>
            <View style={styles.titleback}>
              <Text style={styles.title}> {item.title} </Text>
            </View>
          </View>
        )}
      />
  </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEAE4',
    alignItems: 'center',
    justifyContent: 'top',
  },
  
  poster:{
    width :200,
    height:300,
    margin: 25,
    borderRadius: 20
  },

  title: {
    fontSize: 30,
    color: 'white',
    marginLeft: 50,
  },

  BG: {
    marginTop: 12,
    marginBottom: 45,
    backgroundColor: 'e6e6fa',
  },

  backposter: {
    backgroundColor: '#8FAB98',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },

  titleback:{
    backgroundColor: '#6A8E66',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 50
  }
});