import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, View , Image, useColorScheme} from 'react-native'
import { Colors } from '../constants/Colors.js'


const RootLayout = () => { 

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] 

    return (
      <View style ={{flex: 1}} >
        {/* <Slot />  makes this component appear on all pages*/}
        {/* <Stack /> */}
        <Stack screenOptions={{
            headerStyle : {
                backgroundColor: theme.background},
                headerTintColor: theme.title,              
        }}>
            <Stack.Screen name="index" options = {{title: 'Home'}} />
            <Stack.Screen name="about" options = {{title: 'About Us', headerShown: true}} />
        </Stack>

        {/* <Text> Footer </Text>         */}
      </View>
    )
  }


export default RootLayout
const styles = StyleSheet.create({})
