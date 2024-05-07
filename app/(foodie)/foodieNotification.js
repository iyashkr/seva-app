import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, BackButton, Back, AddImage, Plus, Pencil } from "../../components/icons";
import { router } from 'expo-router';
import { ScrollView } from 'react-native';

export default function FoodieNotification() {

  const [notifications, setNotifications] = useState([{}, {}, {}, {}]);


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 30, gap: 20, alignItems: "center", marginBottom: 25 }}>
        <TouchableOpacity activeOpacity={0.2} onPress={() => router.back()}>
          <Back />
        </TouchableOpacity>
        <Text style={{ fontSize: 17, color: "#32343E" }}>Notification</Text>
      </View>
      <ScrollView>
        {notifications.map((notification, index) => (
          <View key={index} style={{ height: 60, flexDirection: "row", gap: 10, borderRadius: 13, marginVertical: 15, }}>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 55, width: 55, borderRadius: 100, flex: 1 }} />
            <View style={{ gap: 2, flex: 4 }}>
              <Text >
                <Text style={{ fontSize: 13, color: "#32343E" }}>Name{/*notification?.name*/},{/*notification?.name*/}</Text>
                <Text style={{ fontSize: 13, color: "#9C9BA6" }}> message to be delivered to the donor{/*notification?.name*/}</Text>
              </Text>
              <Text style={{ fontSize: 10, color: "#9C9BA6" }}>{/*notification?.time*/} 20 min ago</Text>
            </View>
            <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 55, width: 55, borderRadius: 10, flex: 1 }} />

          </View>

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
    width: "88%",


  },

})