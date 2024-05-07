import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, More, ProfileIcon, LogoutIcon, MapIcon, CaretRightIcon } from "../../components/icons";
import { router, useRouter } from 'expo-router';
import { ScrollView } from 'react-native-web';
import Address from '../../components/address';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Profile() {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        const profileDoc = await getDoc(doc(FIREBASE_DB, "users", user.uid));
        setProfile(profileDoc.data());
      }
    });

    return unsubscribe;
  }, []);

  async function logoutUser() {
    await signOut(FIREBASE_AUTH).then((res) => {
      router.replace('/')
    }).catch(err => Alert.alert(err.message))
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 30, gap: 20, alignItems: "center", }}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
          <Back />
        </TouchableOpacity>
        <Text style={{ fontSize: 17, color: "#32343E" }}>Profile</Text>
        <TouchableOpacity activeOpacity={0.7} style={{ position: "absolute", right: 0 }}>
          <More />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 28 }}>
        <Image source={{ uri: `https://ui-avatars.com/api/?name=${profile?.name}` }} style={{ height: 100, width: 100, borderRadius: 50, marginRight: 15 }} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#32343E" }}>
            {profile?.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "#A0A5BA" }}>
            I love fast food
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate('/personalProfile')}>
        <View style={[styles.displayInfo, { marginTop: 28, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }]}>
          <View style={{ flex: 1 }}>
            <ProfileIcon />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 400, color: "#32343E", flex: 4 }}>
            Personal Info
          </Text>
          <View style={{ flex: 1, left: 28 }}>
            <CaretRightIcon />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate('/myAddress')}>
        <View style={[styles.displayInfo, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }]}>
          <View style={{ flex: 1 }}>
            <MapIcon />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 400, color: "#32343E", flex: 4 }}>
            Address
          </Text>
          <View style={{ flex: 1, left: 28 }}>
            <CaretRightIcon />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => logoutUser()} style={[styles.displayInfo, { marginTop: 28 }]}>
        <View style={{ flex: 1 }}>
          <LogoutIcon />
        </View>
        <Text style={{ fontSize: 16, fontWeight: 400, color: "#32343E", flex: 4 }}>
          Log out
        </Text>
        <View style={{ flex: 1, left: 28 }}>
          <CaretRightIcon />
        </View>
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
  displayInfo: {
    height: 80,
    alignItems: "center",
    backgroundColor: "#F6F8FA",
    flexDirection: "row",
    borderRadius: 18,
    paddingHorizontal: 20
  },

})