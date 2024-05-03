import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, DropdownPolygon, SearchIcon, Delivery, Clock } from "../../components/icons";
import { router } from 'expo-router';
import FoodItemData from '../../components/foodItemData';

export default function FoodieHome() {
  const [foods, setFoods] = useState([{  },{},{},{},{},{},{},{},{}]);
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 30, gap: 20}}>
          <TouchableOpacity onPress={()=> router.navigate('/profile')} activeOpacity={0.2} >
            <Menu/>
          </TouchableOpacity>
          <View style={{}}>
            <Text style={{fontSize: 12, color: "#FC6E2A"}}>LOCATION</Text>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
              <Text style={{fontSize: 14, color: "#676767"}}>LPU ADMISSION</Text>
              <DropdownPolygon/>
            </View>
          </View>
        </View>
        <Text style={{ marginTop: 30, fontSize: 16}}>Hey User<Text style={{fontWeight: 600}}>, Good Afternoon!</Text></Text>
        <View style={{alignItems: "center"}}>
          <TouchableOpacity style={[styles.textInput, {width: "100%", marginTop: 20, justifyContent: "center",}]} onPress={()=> router.navigate('/search')} >
            <View style={{flexDirection: "row", gap: 15}}>
              <SearchIcon/>
              <Text>
                Search Dishes
              </Text>
              
            </View>
          </TouchableOpacity>
        </View>
        
        <Text style={{fontSize: 20, fontWeight: 500, color: "#32343E", marginTop: 20}}>Available Food</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          
        {foods.map((notification, index) => (
          <TouchableOpacity onPress={()=>router.navigate('/orderDetails')}>
            <FoodItemData/>
          </TouchableOpacity>
        ))}

        </ScrollView>
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
  })