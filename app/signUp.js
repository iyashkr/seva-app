import React, {  } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Seva, BendyLinesBrown, EllipsisIcon, BackButton, Eye, EyeOff } from "../components/icons";
import { router } from 'expo-router';

export default function SignUp() {
   
    return (
      <View style={styles.container}>
          <TouchableOpacity style={{position: "absolute", paddingTop: 50, paddingLeft: 15, zIndex: 1}} onPress={()=> router.back()}>
            <BackButton/>
          </TouchableOpacity>
        <View style={{position: "absolute", flexDirection: "row", width: "100%", justifyContent: 'space-between'}}>
          <EllipsisIcon height= {170}/>
            <BendyLinesBrown height={350} width={100}/>
        </View>
        
        <View style={{ justifyContent: "center", marginTop: 130}}>
          <Text 
            style={{             
              fontWeight: "600",
              fontSize: 28,
              textAlign: "center",
              color: "white",}}
          >
            Sign Up
          </Text>
          <Text 
            style={{             
              fontWeight: "400",
              fontSize: 15,
              color: "white",
              textAlign: "center",
              
            }}
          >
            Please sign up to get started
          </Text>
        </View>

        <View style={[styles.modalBody, {paddingBottom: 30}]}>
          <Text style= {{fontSize: 13, color: "#32343E",}}>
            NAME
          </Text>
          <TextInput
            style={[styles.textInput, {marginTop: 10}]}
            placeholder="john doe"
            
          />
          <Text style= {{fontSize: 13, color: "#32343E", marginTop: 20}}>
            EMAIL
          </Text>
          <TextInput
            style={[styles.textInput, {marginTop: 10}]}
            placeholder="example@gmail.com"
            
          />
          <Text style= {{fontSize: 13, color: "#32343E", marginTop: 20}}>
            PASSWORD
          </Text>
          <View style={{position: "relative", }}>
            <TouchableOpacity activeOpacity={0.2} style= {{position: "absolute", zIndex: 1, right: 10, top: 37, height: 40, width: 30,}}>
              <Eye width= {18}/>
            </TouchableOpacity>
            <TextInput
              style={[styles.textInput, {marginTop: 10}]}
              placeholder='*********'
              
              secureTextEntry
            />
          </View>
          <Text style= {{fontSize: 13, color: "#32343E", marginTop: 20}}>
            RE-TYPE PASSWORD
          </Text>
          <View style={{position: "relative", }}>
            <TouchableOpacity activeOpacity={0.2} style= {{position: "absolute", zIndex: 1, right: 10, top: 37, height: 40, width: 30,}}>
              <Eye width= {18}/>
            </TouchableOpacity>
            <TextInput
              style={[styles.textInput, {marginTop: 10}]}
              placeholder='*********'
              
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={()=> router.navigate('/choice')} activeOpacity={0.7} style={[styles.signUpButton, {marginTop: 35}]}>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "700"
              }}>
              SIGN UP
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
      backgroundColor: "#121223",
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