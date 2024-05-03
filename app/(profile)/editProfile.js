import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, EditIcon, } from "../../components/icons";
import { router, useRouter } from 'expo-router';
import { ScrollView } from 'react-native-web';
import Address from '../../components/address';

export default function Profile() {
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 30, gap: 20, alignItems:"center", }}>
          <TouchableOpacity activeOpacity={0.2} onPress={()=> router.back()}>
            <Back/>
          </TouchableOpacity>
          <Text style={{fontSize: 17, color: "#32343E"}}>Edit Profile</Text>
          
        </View>
        
        <View style={{alignItems: "center", marginTop: 25}}>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ backgroundColor: "#FFFFFF", height: 130, width: 130, borderRadius: 100, marginRight: 15}}/>
            <TouchableOpacity activeOpacity={0.7} style={{elevation: 1, position: "absolute", right: 120, bottom: 1}}>
                <EditIcon />
            </TouchableOpacity>
        </View>            
        <Text style= {{fontSize: 14, color: "#32343E", marginTop: 30, fontWeight: 400}}>
            FULL NAME
          </Text>
          <TextInput
            style={[styles.textInput, {marginTop: 8}]}
            placeholder="Enter your name"
            
          />
        <Text style= {{fontSize: 14, color: "#32343E", marginTop: 24, fontWeight: 400}}>
            EMAIL
          </Text>
          <TextInput
            style={[styles.textInput, {marginTop: 10}]}
            placeholder="Enter your name"
            
          />
        <Text style= {{fontSize: 14, color: "#32343E", marginTop: 24, fontWeight: 400}}>
            PHONE NUMBER
          </Text>
          <TextInput
            style={[styles.textInput, {marginTop: 10}]}
            placeholder="Enter your name"
            
          />
        <Text style= {{fontSize: 14, color: "#32343E", marginTop: 24, fontWeight: 400}}>
            BIO
          </Text>
          <TextInput
            multiline={true}
            style={[styles.textInput, {marginTop: 10, paddingVertical: 10, height: 103}]}
            placeholder="Enter your name"
            
          />

        <TouchableOpacity onPress={()=> router.navigate('/personalProfile')} style={[styles.submitBtn, {position: "absolute", bottom: 45 }]}>
          <Text style={{color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
            SAVE
          </Text>
        </TouchableOpacity>
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
      paddingTop: 32,
      paddingBottom: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: "#F0F5FA",
        borderColor: "#F0F5FA",
        height: 56,
        borderRadius: 10,
        position: "relative",
        color: "#6B6E82",
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
    leaderboardRank: {
      width: "100%",
      borderRadius: 125,
      padding: 15,
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
      

    },
    foodImages: {
      borderRadius: 30
    },
    addImageContainer: {
      flexDirection: 'row',
      gap: 20,
      height: 101,
      marginTop: 5,
        
    },
    addImage: {
      height: "100%",
      width: 111,
      borderRadius: 8,
      objectFit: 'cover'
    },
    addImageBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 52,
      borderColor: "#E8EAED",
      borderWidth: 1,
      height: "100%",
      borderRadius: 8,
      width: 111
    },
    submitBtn: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF7622",
      height: 62,
      borderRadius: 10,
      marginTop: 45,
      width: "100%",
      alignSelf: "center"
    },
    displayInfo: {
      height: 80,
      alignItems: "center",
      backgroundColor: "#F6F8FA",
      flexDirection: "row",
      borderRadius: 18,
      paddingHorizontal: 20
    },

  })