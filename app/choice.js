import React, {  } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Seva, BendyLinesBrown, EllipsisIcon, BackButton, Eye, EyeOff } from "../components/icons";
import { router } from 'expo-router';
import 'react-native-gesture-handler';


export default function SignUp() {
   
    return (
      <View style={styles.container}>
        
        <View style={{position: "absolute", alignSelf: "center", gap: 25, width: "90%", alignItems: "center", top: 330, zIndex: 2}}>
          <TouchableOpacity onPress={()=> router.navigate('/foodieHome')} style={{height: 85, width: "70%",alignItems:"center", backgroundColor: "#FB6D3A", borderRadius: 12, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontWeight: 500, fontSize: 20, color: "#FFFFFF", }}>I'M A FOODIE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.navigate('/donorDashboard')} style={{height: 85, width: "70%",alignItems:"center", backgroundColor: "#FB6D3A", borderRadius: 12, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontWeight: 500, fontSize: 20, color: "#FFFFFF", }}>I'M A DONOR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "#F7F8F9",
      position: "relative",
      paddingHorizontal: 25
    },
    modalBody: {
      position: "absolute",
      width: "100%",
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      paddingHorizontal: 32,
      paddingTop: 20,
      paddingBottom: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    textInput: {
      borderWidth: 1,
      backgroundColor: "#F0F5FA",
      borderColor: "#F0F5FA",
      height: 70,
      borderRadius: 10,
      position: "relative",
      color: "black",
      paddingLeft: 20,
      paddingRight: 35,
    },
    signUpButton: {
      marginTop: 20,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 70,
      backgroundColor: "#FF7622",
      borderRadius: 15,
    },
  })