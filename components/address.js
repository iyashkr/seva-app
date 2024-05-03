import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Home, Edit, Delete, Work} from './icons'

export default function Address() {
  
    return (
        <View style={{marginTop: 15, gap: 20}}>
            <View style={[styles.addressBox, {}]}>
                <View style={{flex: 1, }}>
                    <Home/>
                </View>
                <View style={{flex: 5, gap: 10}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 14, color: "#32343E", fontWeight: 400}}>
                            HOME
                        </Text>
                        <View style={{flexDirection: "row", gap: 15}}>
                            <TouchableOpacity>
                                <Edit/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Delete/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginRight: 35}}>
                        <Text style={{fontSize: 14, color: "#91959C", fontWeight: 400}}>
                            3891 Ranchview Dr. Richardson, California 62639
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.addressBox, {}]}>
                <View style={{flex: 1, }}>
                    <Work/>
                </View>
                <View style={{flex: 5, gap: 10}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={{fontSize: 14, color: "#32343E", fontWeight: 400}}>
                            WORK
                        </Text>
                        <View style={{flexDirection: "row", gap: 15}}>
                            <TouchableOpacity>
                                <Edit/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Delete/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginRight: 35}}>
                        <Text style={{fontSize: 14, color: "#91959C", fontWeight: 400, }}>
                            2464 Royal Ln. Mesa, New Jersey 45463
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
  }

  const styles = StyleSheet.create({
    addressBox: {
      width: "100%",
      backgroundColor: "#F0F5FA",
      paddingVertical: 20,
      borderRadius: 16,
      flexDirection: "row",
      paddingHorizontal: 15,

    },
    foodImages: {
      width: "25%", 
      height: 65, 
      borderRadius: 10
    },

  })