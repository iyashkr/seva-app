import React, {  } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, Cross} from "../../components/icons";
import { router } from 'expo-router';

export default function SearchNoResult() {
   
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 30, gap: 20}}>
          <TouchableOpacity activeOpacity={0.2} onPress={()=> router.back()}>
            <Back/>
          </TouchableOpacity>
          <View style={{justifyContent: "center"}}>
            <Text style={{fontSize: 20, color: "#181C2E"}}>Search</Text>
          </View>
        </View>
        
        <View style={{alignItems: "center"}}>
          <TextInput style={[styles.textInput, {width: "100%", marginTop: 20, justifyContent: "center",}]} placeholder='Search Dishes' >
          </TextInput>
        </View>
        <View style={{flexDirection: "row", gap: 15, top: -43, left: 15}}>
              
              <TouchableOpacity style={{left: 310}}>
                <Cross/>
              </TouchableOpacity>
            </View>
        <View style={{ alignSelf: "center" , top: 125}}>
          <Image style={styles.image} source={require("../../assets/images/noResult.png")} />
        </View>
        
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "#FFFFFF",
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
      backgroundColor: "#F6F6F6",
      borderColor: "#F6F6F6",
      height: 70,
      borderRadius: 10,
      position: "relative",
      color: "#676767",
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
    topBarBtn: {
      borderWidth: 2,
      borderColor: "#EDEDED",
      paddingHorizontal: 15,
      height: 41,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    foodImages: {
      width: 62, 
      height: 55, 
      borderRadius: 10
    },
    image: {
      height: 209,
      width: 216,
      
    }
  })