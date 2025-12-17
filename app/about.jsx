import React, { Component } from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Logo from '../assets/img/compmodel.png'
import { Link } from 'expo-router'

const About = () => { 

    return (
      <View style = {styles.container}>
       
        <Image source= {Logo} />
        <Text style ={styles.title}> okay! </Text>
        <Text style = {{marginTop: 30}}> Hello, AGNF </Text>
         <Link href="/">home</Link>
        <View style = {styles.card}> 
            <Text>This is a card About component</Text>
        </View>
        
      </View>
    )
  }


export default About
const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight : 'bold',
        fontSize: 18
    },
    card : {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow : '4px 4px rgba(0,0,0,0.1)',
        margin : 30
    }
})
