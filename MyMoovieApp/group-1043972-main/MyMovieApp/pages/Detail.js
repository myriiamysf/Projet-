import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';


export default function Detail({route, navigation}) {
    const { movies } = route.params
    const [showTip, setTip] = useState(false);
    const [showTip2, setTip2] = useState(false);
    const [showTip3, setTip3] = useState(false);


 return (

  <View style={styles.container}>
    <View style={styles.backimage}>
        <Image style={styles.posters} source={{ uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}` }} />
    </View>
    <View style={styles.titreback}>
        <Text style={styles.titre}>{movies.title} </Text>
    </View>

    <View style={styles.buttons}>
{/* tooltip descritpion
________________________________________________________________________________________________________________________________________ */}

     <Tooltip
        isVisible={showTip}
        content={
          <View>
            <Text> {movies.overview} </Text>
          </View>
        }
        onClose={() => setTip(false)}
        // below is for the status bar of react navigation bar
      >
        <TouchableOpacity
            style={[{ width: '100%', marginTop: 20}, styles.button]}
            onPress={() => setTip(true)}
          >
            <View style={styles.infoback}>
                <Text style={styles.infotitre}> Description </Text>
            </View>
    </TouchableOpacity>
      </Tooltip>

{/* tooltip vote      
________________________________________________________________________________________________________________________________________ */}

      <Tooltip
        isVisible={showTip2}
        content={
          <View>
            <Text> Ce filme a un score de {movies.vote_average}/10 </Text>
          </View>
        }
        onClose={() => setTip2(false)}
        // below is for the status bar of react navigation bar
      >
        <TouchableOpacity
            style={[{ width: '100%', marginTop: 20}, styles.button]}
            onPress={() => setTip2(true)}
          >
            <View style={styles.infoback}>
                <Text style={styles.infotitre}>Note moyenne</Text>
            </View>
    </TouchableOpacity>
      </Tooltip>

{/* tooltip nb vote      
________________________________________________________________________________________________________________________________________ */}

    <Tooltip
        isVisible={showTip3}
        content={
          <View>
            <Text>{movies.vote_count} personnes ont voté pour ce film.</Text>
          </View>
        }
        onClose={() => setTip3(false)}
        // below is for the status bar of react navigation bar
      >
        <TouchableOpacity
            style={[{width: '100%', marginTop: 20}, styles.button]}
            onPress={() => setTip3(true)}
          >
            <View style={styles.infoback}>
                <Text style={styles.infotitre}>Nombre de votes</Text>
            </View>
    </TouchableOpacity>
      </Tooltip>
    </View>
  </View>


 );
}

const styles = StyleSheet.create({

 container: {
  flex: 1,
  backgroundColor: '#ECEAE4',

 },

 posters:{
    height: 300,
    width: 200,
    borderRadius: 20,
    borderColor: '#5B7B57'
 },

 backimage:{
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#BFD0C1',
    borderWidth: 25,
    borderRadius: 30,
    borderColor: '#5B7B57'
 },

 infoback:{
    backgroundColor: '#8FAB98',
    padding:3,
    paddingBottom:5,
    borderRadius: 5,
    marginBottom:20
 },

 titre:{
    fontSize: 30,
    color: '#5B7B57'
 },

 titreback:{
    alignItems: 'center',
    margin: 15,
    marginTop: 50
 },

 infotitre: {
    textDecorationLine: 'underline',
    fontSize: 18,
    color: '#E4E2CF'
 },

 buttons:{
    alignItems: 'flex-start',
    marginLeft: 12
 }

});