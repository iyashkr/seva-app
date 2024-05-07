import React, { } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Seva, BendyLinesBrown, EllipsisIcon, BackButton, Eye, EyeOff, FoodieLogo, DonorLogo } from "../components/icons";
import { router, useLocalSearchParams } from 'expo-router';
import 'react-native-gesture-handler';
import { doc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../firebaaseConfig';


export default function Choice() {
  const params = useLocalSearchParams();

  async function updateChoice(val) {
    try {
      await updateDoc(doc(FIREBASE_DB, "users", params.uid), { role: val });
      if (val === "foodie") {
        router.replace("/foodieHome");
      } else {
        router.replace("/donorDashboard");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => updateChoice("foodie")} style={styles.choiceBtn}>
        <FoodieLogo />
        <Text style={{ fontWeight: 500, fontSize: 22, color: "#383838", letterSpacing: 1 }}>I am Foodie!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateChoice("donor")} style={styles.choiceBtn}>
        <DonorLogo />
        <Text style={{ fontWeight: 500, fontSize: 22, color: "#383838", letterSpacing: 1 }}>I am a Donor!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F7F8F9",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25
  },
  choiceBtn: {
    height: 72, width: "76%", alignItems: "center",
    borderColor: "#FB6D3A", borderRadius: 12,
    borderWidth: 2,
    alignItems: "center", justifyContent: "center",
    flexDirection: 'row', gap: 20
  }
})