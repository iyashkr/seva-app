import React, { useState, useEffect, useMemo } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Search, Back, Cross } from "../../components/icons";
import { router } from 'expo-router';
import MapView, { Marker } from "react-native-maps";
import * as location from 'expo-location';

export default function AddAddress() {
   

    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0321,

    });
    const [mapRegion2, setMapRegion2] = useState({
        latitude: 31.277495676874434,
        longitude: 75.67808593880449,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0321,
    });

    const userLocation = async () => {
        let { status } = await location.requestForegroundPermissionsAsync({ enableHighAccuracy: true });
        if (status === 'granted') {
            let locationData = await location.getCurrentPositionAsync({});
            setMapRegion(prevRegion => ({
                ...prevRegion,
                latitude: locationData.coords.latitude,
                longitude: locationData.coords.longitude,
            }));
            console.log(locationData.coords.latitude, locationData.coords.longitude);
        } else {
            console.log('Location permission denied');
        }
    }

    useEffect(()=> {
        userLocation();
    },[])
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", marginTop: 15, gap: 20, alignItems: 'center', marginHorizontal: 15, marginBottom: 15}}>
          <TouchableOpacity activeOpacity={0.2} onPress={()=> router.back()}>
            <Back/>
          </TouchableOpacity>
          <View style={{justifyContent: "center",}}>
            <Text style={{fontSize: 20, color: "#181C2E"}}>Order Details</Text>
          </View>
        </View>
        <View>
            <MapView style={styles.map} region={mapRegion}>
                <Marker coordinate={mapRegion} title='Marker'/> 
                <Marker coordinate={mapRegion2} title='Marker2'/> 
            </MapView>
            
        </View>
        <View style={{ paddingHorizontal: 25, bottom: 190}}>
          <View style={{backgroundColor: "#FFFFFF", }}>
            <View style={{marginTop: 15}}>
              <Text style={{fontSize: 14, fontWeight: 400, color: "#32343E"}}>ADDRESS</Text>
              <TextInput placeholder='Enter address' style={[styles.textInput, {width: "100%", marginTop: 10, height: 62}]}/>
            </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: "center", marginTop: 35}}>
            <View style={{flex: 1,}}>
              <Text style={{fontSize: 14, fontWeight: 400, color: "#32343E"}}>STREET</Text>
              <TextInput placeholder='Street Name' style={[styles.textInput, {width: "90%", marginTop: 10, height: 47}]}/>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 14, fontWeight: 400, color: "#32343E"}}>POST CODE</Text>
              <TextInput placeholder='Post code' style={[styles.textInput, {width: "90%", marginTop: 10, height: 47}]}/>
            </View>
          </View>
          <View style={{backgroundColor: "#FFFFFF", paddingVertical: 25}}>
            <View style={{marginTop: 15}}>
              <Text style={{fontSize: 14, fontWeight: 400, color: "#32343E"}}>APPARTMENT</Text>
              <TextInput placeholder='Apartment name' style={[styles.textInput, {width: "100%", marginTop: 10, height: 62}]}/>
            </View>
          </View>
          <TouchableOpacity style={[styles.submitBtn, { bottom: 45 }]} onPress={userLocation}>
            <Text style={{color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
                LOCATE
            </Text>
          </TouchableOpacity>
        </View>
        
        
        
        
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "#FFFFFF",
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
      
    },
    map: {
        width: '100%',
        height: '60%',
    },
    submitBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF7622",
        height: 62,
        borderRadius: 10,
        marginTop: 45,
        width: "100%",
        bottom: 35,
        alignSelf: "center"
    },

  })