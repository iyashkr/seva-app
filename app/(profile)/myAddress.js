import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, BackButton, Back, AddImage, Plus, Pencil } from "../../components/icons";
import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import Address from '../../components/address';
import { StatusBar } from 'expo-status-bar';

export default function MyAddress() {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ flexDirection: "row", marginTop: 30, gap: 20, alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.2} onPress={() => router.back()}>
          <Back />
        </TouchableOpacity>
        <Text style={{ fontSize: 17, color: "#32343E" }}>My Address</Text>
      </View>
      <View style={{ marginTop: 25, }}>
        <Address />
      </View>
      <TouchableOpacity onPress={() => router.navigate('/addAddress')} activeOpacity={0.7} style={[styles.submitBtn, { position: "absolute", bottom: 45 }]}>
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
          ADD ADDRESS
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
  submitBtn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7622",
    height: 62,
    borderRadius: 10,
    marginTop: 45,
    width: "100%",

  },

})