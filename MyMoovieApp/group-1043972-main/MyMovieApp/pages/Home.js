import { StyleSheet, Text, View, FlatList, Image, StatusBar, Button, } from 'react-native';
import { React, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({navigation}) {

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
      <StatusBar style="auto" />
      <Text style={styles.titre}> Bienvenue </Text>
      <Text style={styles.tetedaffiche}>Tête d'affiche :</Text>
    <View style={styles.container2}>
      <StatusBar style="auto" />
      <FlatList
      horizontal={true}
        data={movies} // movies est le tableau contenant les films
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
          <View style={styles.backtitle}>
            <Text style={styles.title}> {item.title} </Text>
          </View>
      </View>
        )}
      />
      </View>
      {/* <Button title = "Détails des films" onPress={() => {navigation.navigate('Detail')}}> </Button> */}
        <Text style={styles.phrase}>Découvrez ici la liste des films du moment. </Text>
      <View style={styles.buttonback}>
          <Button style={styles.button}
            title="Découvrir"
            onPress={()=>{navigation.navigate('Liste')
            }}
          />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ECEAE4',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
  },
  
  poster: {
    width :200,
    height:300,
    margin: 25,
    borderRadius: 12
  },

  container2:{
    alignItems: 'flex-start',
    width : 390,
    height: 400,
    marginBottom: 50
  },

  title: {
    backgroundColor : '#6A8E66',
    fontSize: 18,
    padding: 8,
    textDecorationLine: 'underline',
    color: '#E4E2CF'
  },

  backtitle:{
    alignItems: 'center'
  },

  titre: {
    fontSize: 45,
    margin: 25,
    color: '#5B7B57'
  },

  tetedaffiche:{
    fontSize: 25,
    margin: 0,
    color: '#5B7B57'
  },

  phrase:{
    fontSize: 15,
    marginBottom: 20,
    color: '#5B7B57'
  },

  buttonback: {
    backgroundColor : '#6A8E66',
    borderRadius: 12
  }

  }
);
