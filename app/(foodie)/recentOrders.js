import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, BackButton, Back, AddImage, Plus, Pencil, Star } from "../../components/icons";
import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import Address from '../../components/address';

export default function RecentOrders() {

    const [notifications, setNotifications] = useState([{}, {}, {}, {}]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 30, gap: 20, alignItems: "center", marginBottom: 25 }}>
                <TouchableOpacity activeOpacity={0.2} onPress={() => router.back()}>
                    <Back />
                </TouchableOpacity>
                <Text style={{ fontSize: 17, color: "#32343E" }}>Recent Orders</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {notifications.map((notification, index) => (
                    <View key={index} style={{ flexDirection: "row", gap: 10, alignContent: "flex-start" }}>
                        <Image source={require('../../assets/images/SampleFood.png')} style={{ height: 55, width: 55, borderRadius: 100, }} />
                        <View style={{ gap: 2, flex: 4, backgroundColor: "#F6F8FA", marginBottom: 15, paddingTop: 10, paddingBottom: 25, borderRadius: 15, paddingHorizontal: 15 }}>
                            <View style={{ marginBottom: 7 }}>
                                <Text style={{ color: "#9C9BA6", fontSize: 12, fontWeight: 400 }}>20/12/2020</Text>
                            </View>
                            <Text style={{ color: "#32343E", fontSize: 14, fontWeight: 600, marginBottom: 5 }}>40 Kg Rice & Potato</Text>
                            <Text style={{ color: "#9C9BA6", fontSize: 12, fontWeight: 400 }}>Food deleiverd from Food Stalls near Uni Hospital. Distributed for needy people.</Text>
                        </View>


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