import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform , SafeAreaView , StatusBar,TouchableOpacity,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            

                <ImageBackground source = {require('../assets/stars.gif')}
                                     style = {styles.backgroundImage}>
                    
            
            <View style = {styles.titleBar}>

            <Text style = {styles.titleText} > Stellar App  </Text>

        </View>
        <TouchableOpacity style = {styles.routeCard}
                    onPress = {()=> this.props.navigation.navigate("SpaceCrafts") }
                    >
                        
                        <Text style = {styles.routeText}>Space Crafts</Text> </TouchableOpacity>
                        <Image source = {require('../assets/space_crafts.png')}
                               style = {styles.iconImage}
                        ></Image>
                        <TouchableOpacity style = {styles.routeCard}
                    onPress = {()=> this.props.navigation.navigate("StarMap") }
                    >
                        
                        <Text style = {styles.routeText}>Star Map</Text> </TouchableOpacity>
                        <Image source = {require('../assets/star_map.png')}
                               style = {styles.iconImage}
                        ></Image>
                        <TouchableOpacity style = {styles.routeCard}
                    onPress = {()=> this.props.navigation.navigate("DailyPic") }
                    >
                        
                        <Text style = {styles.routeText}>Daily Pics</Text> </TouchableOpacity>
                        <Image source = {require('../assets/daily_pictures.png')}
                               style = {styles.iconImage}
                        ></Image>
        
        </ImageBackground>
        
        

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})