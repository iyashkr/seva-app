import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Seva, BendyLines, EllipsisIcon, Eye, EyeOff } from "../components/icons";
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../firebaaseConfig';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);



  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        const result = await getDoc(doc(FIREBASE_DB, "users", user.uid));
        if (result.exists()) {
          const userData = result.data();
          if (!userData.role) {
            return router.replace({
              pathname: "/choice",
              params: {
                uid: userData.userId
              }
            });
          }
          if (userData.role === "foodie") {
            return router.replace("/foodieHome");
          }
          if (userData.role === "donor") {
            return router.replace("/donorDashboard");
          }
        }
      } else {
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);




  const login = async () => {
    try {
      const trimmedEmail = email.toLowerCase().trim();
      const trimmedPass = password.trim();
      const userQuery = query(collection(FIREBASE_DB, 'users'), where("email", "==", trimmedEmail))
      const userSnapshot = await getDocs(userQuery);
      const userDocs = userSnapshot.docs;
      if (userDocs.length === 0) {
        return Alert.alert("User doesn't exist, please signup");
      }
      const userData = userDocs[0].data();
      await signInWithEmailAndPassword(FIREBASE_AUTH, trimmedEmail, trimmedPass);
      if (!userData.role) {
        return router.replace({
          pathname: "/choice", params: {
            uid: userData.userId
          }
        });
      }
      if (userData.role === "foodie") {
        return router.replace("/foodieHome");
      }
      if (userData.role === "donor") {
        return router.replace("/donorDashboard");
      }
    }
    catch (error) {
      console.log(error.message);
      Alert.alert('Sign Up failed: ' + error.message);
    }
  }

  if (isLoading) {
    return (
      <View style={[styles.container, { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "white" }]}>
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", flexDirection: "row", width: "100%", justifyContent: 'space-between' }}>
        <EllipsisIcon height={170} />
        <BendyLines height={400} width={100} />
      </View>

      <View style={{ alignItems: "center", paddingTop: 76, paddingBottom: 85 }}>
        <Seva height={70} width={90} />
      </View>
      <View style={{ justifyContent: "center", }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 28,
            textAlign: "center",
            color: "white",

          }}
        >
          Log In
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 15,
            color: "white",
            textAlign: "center",

          }}
        >
          Please sign in to your existing account
        </Text>
      </View>

      <View style={[styles.modalBody, { paddingBottom: 60 }]}>
        <Text style={{ fontSize: 13, color: "#32343E", marginTop: 20 }}>
          EMAIL
        </Text>
        <TextInput
          style={[styles.textInput, { marginTop: 10 }]}
          placeholder="example@gmail.com"
          onChangeText={val => setEmail(val)}
        />
        <Text style={{ fontSize: 13, color: "#32343E", marginTop: 25 }}>
          PASSWORD
        </Text>
        <View style={{ position: "relative", }}>
          <TouchableOpacity activeOpacity={0.2} style={{ position: "absolute", zIndex: 1, right: 10, top: 37, height: 40, width: 30, }}>
            <Eye width={18} />
          </TouchableOpacity>
          <TextInput
            style={[styles.textInput, { marginTop: 10 }]}
            placeholder='*********'
            onChangeText={val => setPassword(val)}
            secureTextEntry
          />
        </View>
        <View style={{ flexDirection: "row", gap: 15, paddingHorizontal: 5, marginTop: 25, flex: 1 }}>
          <TouchableOpacity onPress={toggleCheckbox}>
            <Checkbox value={isChecked} onValueChange={toggleCheckbox} color={"#7E8A97"} />
          </TouchableOpacity>
          <Text style={{ color: "#7E8A97", flex: 4 }}>Remember me </Text>
          <TouchableOpacity>
            <Text style={{ color: "#FF7622", flex: 3 }}>Forgot Password </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.signUpButton} onPress={() => login()}>
          <Text
            style={{
              fontSize: 14,
              color: "white",
              fontWeight: "700"
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 6, marginTop: 25, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: "#646982",
              fontWeight: "400",
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.navigate('/signUp')}>
            <Text
              style={{
                fontSize: 13,
                color: "#FF7622",
                fontWeight: "700",
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#121223",
    position: "relative",
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
})