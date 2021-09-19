import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class DailyPic extends Component{
    
    constructor() {
        super();
        this.state = {
          apod: '',
        };
    
    }
    componentDidMount() {
        this.getAPOD();
      }
      getAPOD = () => {
        axios
          .get(
            'https://api.nasa.gov/planetary/apod?api_key=HQx5kKo2kwzHPhCRczfa6BIPM06ShNDrgitZPT3A'
          )
          .then((response) => {
            this.setState({ apod: response.data });
          })
          .catch((error) => {
            alert(error.messeage);
          });
      };
      render() {
        return (
          <View style={styles.container}>
            <View>
              <SafeAreaView style={styles.droidSafeArea} />
    
              <ImageBackground
                source={require('../assets/stars.gif')}
                style={{ flex: 1, resizeMode: 'cover' }}>
                <Text style={styles.header}>Daily PIc</Text>
                <View style={styles.data}>
                  <Text style={styles.routeName}>
                    {' '}
                    Astronomy Picture Of The Day
                  </Text>
                  <Text style={styles.titleText}> {this.state.apod.title}</Text>
                  <TouchableOpacity
                    style={styles.listContainer}
                    onPress={() =>
                      Linking.openURL(this.state.apod.url).catch((error) => {
                        console.error('could not load the page', error);
                      })
                    }>
                    <View style={styles.iconContainer}>
                      <Image style={styles.img} source={require('../assets/play-video.png')} />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.explainText}>
                    
                    {this.state.apod.explanation}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,                   
        justifyContent: 'center',
      },
      droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      header: {
        fontSize: 40,
        flex: 0.3,
        textAlign: 'center',
        color: 'yellow',
      },
      data: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        borderColor:"yellow"
      },
      routeName:{
        textAlign:"center",
        color:"red",
        fontSize:30, 
        fontFamily:"	Brush Script MT",
        borderWidth:2,
         borderRadius:90
      
    
      },titleText:{
        textAlign:"center",
        color:"red",
        fontSize:20,
        fontFamily:"	Copperplate"
    
      },
       img:{
         resizeMode: 'contain',
         width:200
       },
       explainText:{
     
         borderWidth:4,
         color:"yellow",
          borderRadius:20
       }
    });

