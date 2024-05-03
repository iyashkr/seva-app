import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, BackButton, Back, AddImage, Plus, Pencil} from "../../components/icons";
import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import NavLayout from '../../components/NavLayout';
export default function AddItems() {
  
  return (
    <NavLayout>
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 30, gap: 20, alignItems:"center", }}>
          <TouchableOpacity activeOpacity={0.2} onPress={()=> router.navigate('/donorDashboard')}>
            <Back/>
          </TouchableOpacity>
          <Text style={{fontSize: 17, color: "#32343E"}}>Add New Items</Text>
          <Text style={{fontSize: 14, color: "#FB6D3A", paddingLeft: 100}}>RESET</Text>
        </View>
        <View style={{marginTop: 23}}>
          <Text style={{fontSize: 13, color: "#32343E", paddingBottom: 10}}>TITLE</Text>
          <TextInput placeholder='e.g. 20 kg Dal Makhani & 40 kg rice' style={[styles.textInput, {height: 55}]}></TextInput>
        </View>
        <View style={{marginTop: 25}}>
          <Text style={{fontSize: 13, color: "#32343E", paddingBottom: 5}}>UPLOAD PHOTO/VIDEO</Text>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.addImageContainer}>
            <Image style={styles.addImage} source={require("../../assets/images/SampleFood.png")} />   
                <View style={styles.addImageBtn}>
                  <TouchableOpacity activeOpacity={0.3}>
                    <AddImage/>
                  </TouchableOpacity>
                  <Text style={{fontSize: 13, color: "#9C9BA6"}}>Add</Text>
                </View>
                <View style={styles.addImageBtn}>
                  <TouchableOpacity activeOpacity={0.3}>
                    <AddImage/>
                  </TouchableOpacity>
                  <Text style={{fontSize: 13, color: "#9C9BA6"}}>Add</Text>
                </View>
                <View style={styles.addImageBtn}>
                  <TouchableOpacity activeOpacity={0.3}>
                    <AddImage/>
                  </TouchableOpacity>
                  <Text style={{fontSize: 13, color: "#9C9BA6"}}>Add</Text>
                </View>
            </View>
          </ScrollView>
        </View>
        <View style={{marginTop: 25}}>
          <View style={{flexDirection: "row", gap: 3}}>
            <Text style={{fontSize: 13, color: "#32343E", paddingBottom: 10}}>QUANTITY NAME</Text>
            <Pencil/>
          </View>
          <TextInput placeholder='e.g. 20 kg, 2litres' style={[styles.textInput, {height: 45}]}></TextInput>
        </View>
        <TouchableOpacity style={{width: "43%"}}>
          <View style={{marginTop: 15, alignItems: "centre", gap: 3, flexDirection: "row", }}>
            <Plus/>
            <Text style={{fontSize: 13, color: "#FF7622", paddingBottom: 10}}>ADD MORE QUANTITY</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 13, color: "#32343E", paddingBottom: 10}}>DETAILS</Text>
          <TextInput multiline={true} style={[styles.textInput, {height: 110, }]}></TextInput>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 13, color: "#32343E", paddingBottom: 10}}>PRICE</Text>
          <TextInput placeholder='Free/ ₹20, ₹30, ₹40' style={[styles.textInput, {height: 45}]}></TextInput>
        </View>
        <TouchableOpacity style={[styles.submitBtn, {}]} onPress={()=> router.navigate('/home')}>
          <Text style={{color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
            SAVE CHANGES
          </Text>
        </TouchableOpacity>
      </View>
    </NavLayout>
  )
}

const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "#FFFFFF",
      position: "relative",
      paddingHorizontal: 25,
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
      backgroundColor: "#FDFDFD",
      borderColor: "#E8EAED",
      borderRadius: 10,
      position: "relative",
      color: "#9C9BA6",
      paddingHorizontal: 20,
      paddingVertical: 5
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
        marginVertical: 25
        
    },

  })