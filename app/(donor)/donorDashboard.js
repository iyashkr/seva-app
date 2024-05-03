import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, DropdownPolygon, HandGesture, CarretRight, LevelUp, Star, LevelDown } from "../../components/icons";
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';

export default function DonorDashboard(reward) {
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 30, gap: 20}}>
          <TouchableOpacity activeOpacity={0.2} >
            <Menu/>
          </TouchableOpacity>
          <View style={{}}>
            <Text style={{fontSize: 12, color: "#FC6E2A"}}>LOCATION</Text>
            <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
              <Text style={{fontSize: 14, color: "#676767"}}>Lawgate, LPU</Text>
              <DropdownPolygon/>
              
            </View>
          </View>
          <Image source={require('../../assets/images/SampleFood.png')} style={{ backgroundColor: "#FFFFFF", height: 45, width: 45, borderRadius: 30, left: 130}}/>
        </View>
        <View style={{flexDirection: "row", marginTop: 24, justifyContent: "space-between"}}>
          <View style={{height: 115, width: "48%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "center", paddingLeft: 15}}>
            <Text  style={{ fontSize: 53, fontWeight: 700,  color: "#32343E",}}>20</Text>
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#838799",}}>TOTAL ORDERS</Text>
          </View>
          <View style={{height: 115, width: "48%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "center",  paddingLeft: 15}}>
            <Text  style={{ fontSize: 53, fontWeight: 700,  color: "#32343E",}}>05</Text>
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#838799",}}>ORDER REQUEST</Text>
          </View>
        </View>
        <View style={{height: 109, width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "space-between", paddingHorizontal: 15, flexDirection: "row", marginTop: 13, alignItems: "center"}}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E",}}>Your Points</Text>
            <Text  style={{ fontSize: 53, fontWeight: 700,  color: "#FB6D3A",}}>432</Text>
          </View>
          <View style={{}}>
            <HandGesture/>
            
          </View>
        </View>
        <View style={{height: 94, width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, paddingHorizontal: 15, marginTop: 13, justifyContent: "center"}}>
          <TouchableOpacity onPress={()=>router.navigate('/donorReviews')} style={{ flexDirection: "row",  justifyContent: "space-between",}}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Reviews</Text>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#FB6D3A", }}>See all Reviews</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center", gap: 17}}>
            <View style={{flexDirection: "row", alignItems: "center", }}>
              <Star/>
              <Text style={{ fontSize: 22, fontWeight: 700, color: "#FB6D3A", paddingLeft: 8}}>4.9</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Total 20 Reviews</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, padding: 15, marginTop: 25, position: "relative", marginBottom: 10}}>
          <View style={{ flexDirection: "row",  justifyContent: "space-between",}}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Leaderboard</Text>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#FF7622", }}>View all</Text>

            </TouchableOpacity>
          </View>
          <View style={[styles.leaderboardRank, {backgroundColor: "#FFCA28"}]} >
            <LevelUp/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>1</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15}}/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Iman</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244", position: "absolute", right: 20}}>2019</Text>
          </View>
          <View style={[styles.leaderboardRank, {backgroundColor: "#F4F4F4"}]} >
            <LevelDown/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>2</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15}}/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Vatani</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244", position: "absolute", right: 20}}>1932</Text>
          </View>
          <View style={[styles.leaderboardRank, {backgroundColor: "#FF8228"}]} >
            <LevelDown/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>3</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15}}/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E",}}>Jonathan</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244", position: "absolute", right: 20}}>1431</Text>
          </View>
          <View style={[styles.leaderboardRank, {backgroundColor: "#F4F4F4"}]} >
            <LevelUp/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>4</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15}}/>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Yash</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244", position: "absolute", right: 20}}>690</Text>
          </View>
          
        </ScrollView>
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
      paddingTop: 32,
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
    leaderboardRank: {
      width: "100%",
      borderRadius: 125,
      padding: 15,
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      

    },
    foodImages: {
      borderRadius: 30
    },
  })