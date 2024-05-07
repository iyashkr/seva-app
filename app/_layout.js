import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Layout = ({ children }) => {
    return (
        <>
            <StatusBar style="dark" />
            <SafeAreaView style={styles.container}>
                <Slot />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: '#F7F8F9'
    },
});

export default Layout;
