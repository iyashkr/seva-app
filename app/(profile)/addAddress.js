import React, { useState, useEffect, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, BlackBackBtn } from "../../components/icons";
import { router } from 'expo-router'
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function AddAddress() {

  const options = ['Home', 'Work', 'Other'];
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.0321,
  });

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Location permission denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setMapRegion({
      ...mapRegion,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity style={{ marginHorizontal: 20, top: 25, zIndex: 2 }} activeOpacity={0.2} onPress={() => router.back()}>
        <BlackBackBtn />
      </TouchableOpacity>
      <View style={{ marginTop: -45 }}>
        <MapView style={styles.map} region={mapRegion}>
          {mapRegion.latitude && mapRegion.longitude && (
            <Marker coordinate={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} title='Your Location' />
          )}
        </MapView>
      </View>

      {/* Form */}
      <View style={{ paddingHorizontal: 25, marginTop: 35 }}>
        <>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "#32343E" }}>ADDRESS</Text>
          <TextInput placeholder='Enter address' style={[styles.textInput, { marginTop: 10, height: 62 }]} />
        </>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 25, gap: 20 }}>
          <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 14, fontWeight: 400, color: "#32343E" }}>STREET</Text>
            <TextInput placeholder='Street Name' style={[styles.textInput, { marginTop: 10, height: 47 }]} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: 400, color: "#32343E" }}>POST CODE</Text>
            <TextInput placeholder='Post code' style={[styles.textInput, { marginTop: 10, height: 47 }]} />
          </View>
        </View>
        <>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "#32343E" }}>APPARTMENT</Text>
          <TextInput placeholder='Apartment name' style={[styles.textInput, { marginTop: 10, height: 62 }]} />
        </>

        {/* Label as */}
        <Text style={{ fontSize: 14, fontWeight: 400, color: "#32343E", marginTop: 25 }}>LABEL AS</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tabBar, selectedOption === index && styles.selectedOption]}
              onPress={() => handleOptionPress(index)}
            >
              <Text style={[{}, selectedOption === index && styles.selectedOptionText]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Save Location Button */}
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 600, }}>
            SAVE LOCATION
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    backgroundColor: "#F6F6F6",
    height: 70,
    borderRadius: 10,
    color: "#383838",
    paddingHorizontal: 20,
  },
  map: {
    width: '100%',
    height: 295,
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7622",
    height: 62,
    borderRadius: 18,
    marginTop: 30,
    width: "100%",
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 12
  },
  selectedOption: {
    backgroundColor: "#F58D1D",
  },
  selectedOptionText: {
    color: 'white',
  },
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F5FA',
    borderRadius: 25,
    padding: 11,
    paddingHorizontal: 22,
  },
})