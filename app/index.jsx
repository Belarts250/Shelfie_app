import React, { Component } from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Logo from '../assets/img/ok.png'
import { Link } from 'expo-router'

const Home = () => { 

    return (
      <View style = {styles.container}>
        <Image source= {Logo} />
        <Text style ={styles.title}> okay! </Text>
        <Text style = {{marginTop: 30}}> Hello, AGNF </Text>
        <View style = {styles.card}> 
            <Text>This is a card component</Text>
        </View>
        <Link href="/about" >About</Link>
      </View>
    )
  }


export default Home
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
