import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, DropdownPolygon, HandGesture, CarretRight, LevelUp, Star, LevelDown } from "../../components/icons";
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function DonorDashboard() {

  const [totalOrders, setTotalOrders] = useState(0);
  const [requestOrders, setRequestOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  useEffect(() => {
    async function getOrders() {
      onAuthStateChanged(FIREBASE_AUTH, async (user) => {
        const orderQuery = query(collection(FIREBASE_DB, "orders"), where("uid", "==", user.uid))
        const docs = (await getDocs(orderQuery)).docs;
        let reqorders = 0;
        let comporders = 0;
        docs.forEach((document, index) => {
          const data = document.data();
          if (data.status === "request") {
            reqorders += 1;
          }
          if (data.status === "completed") {
            comporders += 1;
          }
        });
        setTotalOrders(docs.length);
        setRequestOrders(reqorders);
        setCompletedOrders(comporders);
      }
      )
    }
    getOrders();
  }, []);



  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 30, gap: 20 }}>
        <TouchableOpacity activeOpacity={0.2} >
          <Menu />
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Text style={{ fontSize: 12, color: "#FC6E2A" }}>LOCATION</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 14, color: "#676767" }}>Lawgate, LPU</Text>
            <DropdownPolygon />
          </View>
        </TouchableOpacity>
        <Image source={require('../../assets/images/SampleFood.png')} style={{ backgroundColor: "#FFFFFF", height: 45, width: 45, borderRadius: 30, left: 130 }} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 24, justifyContent: "space-between" }}>
        <View style={{ height: 115, width: "48%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "center", paddingLeft: 15 }}>
          <Text style={{ fontSize: 53, fontWeight: 700, color: "#32343E", }}>{totalOrders}</Text>
          <Text style={{ fontSize: 13, fontWeight: 600, color: "#838799", }}>TOTAL ORDERS</Text>
        </View>
        <View style={{ height: 115, width: "48%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "center", paddingLeft: 15 }}>
          <Text style={{ fontSize: 53, fontWeight: 700, color: "#32343E", }}>{completedOrders}</Text>
          <Text style={{ fontSize: 13, fontWeight: 600, color: "#838799", }}>ORDER COMPLETED</Text>
        </View>
      </View>
      <View style={{ height: 109, width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, justifyContent: "space-between", paddingHorizontal: 15, flexDirection: "row", marginTop: 13, alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Your Points</Text>
          <Text style={{ fontSize: 53, fontWeight: 700, color: "#FB6D3A", }}>{completedOrders * 500}</Text>
        </View>
        <View style={{}}>
          <HandGesture />

        </View>
      </View>
      <View style={{ height: 94, width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, paddingHorizontal: 15, marginTop: 13, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => router.navigate('/donorReviews')} style={{ flexDirection: "row", justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Reviews</Text>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#FB6D3A", }}>See all Reviews</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center", gap: 17 }}>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Star />
            <Text style={{ fontSize: 22, fontWeight: 700, color: "#FB6D3A", paddingLeft: 8 }}>4.9</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Total 20 Reviews</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", backgroundColor: "#FFFFFF", borderRadius: 15, padding: 15, marginVertical: 15, position: "relative", }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
          <Text style={{ fontSize: 14, fontWeight: 500, color: "#32343E", }}>Leaderboard</Text>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#FF7622", }}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.leaderboardRank, { backgroundColor: "#FFCA28" }]} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LevelUp />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>1</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15 }} />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Iman</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244" }}>2019</Text>
        </View>
        <View style={[styles.leaderboardRank, { backgroundColor: "#F4F4F4" }]} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LevelDown />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>2</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15 }} />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Vatani</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244" }}>1932</Text>
        </View>
        <View style={[styles.leaderboardRank, { backgroundColor: "#FF8228" }]} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LevelDown />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>3</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15 }} />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Jonathan</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244" }}>1431</Text>
        </View>
        <View style={[styles.leaderboardRank, { backgroundColor: "#F4F4F4", marginBottom: 30 }]} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LevelUp />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>4</Text>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 32, width: 32, borderRadius: 30, marginHorizontal: 15 }} />
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#32343E", }}>Yash</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "#312244", }}>690</Text>
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
    justifyContent: "space-between"
  },
  foodImages: {
    borderRadius: 30
  },
})