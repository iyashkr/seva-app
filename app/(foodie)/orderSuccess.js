import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { } from "../../components/icons";
import { router } from 'expo-router';

export default function OrderSuccess() {

  return (
    <View style={styles.container}>
      <Image style={{ height: 222, width: 222 }} source={require('../../assets/images/public/success.png')} />
      <Text style={{ color: "#111A2C", fontSize: 24, fontWeight: 500, marginTop: 24, }}>Congratulations!</Text>
      <Text style={{ color: "#525C67", fontSize: 14, fontWeight: 400, marginTop: 16, textAlign: "center", paddingHorizontal: 75 }}>You successfully ordered food, Now seat & enjoy the food!</Text>
      <TouchableOpacity style={[styles.submitBtn, {}]} onPress={() => router.replace('/foodieHome')} >
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
          HOMEPAGE
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
    justifyContent: "center",
    alignItems: "center",
  },

  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7622",
    height: 62,
    borderRadius: 10,
    marginVertical: 35,
    width: "90%",
    top: 185
  },

})