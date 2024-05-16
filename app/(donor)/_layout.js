import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/donorBottomNav';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.content}>
                <Slot />
            </View>

            {/* Bottom Navigation Bar */}
            <View style={{ height: 89 }}>
                <BottomNav />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    content: {
        flex: 1,
        height: "100%",
    },
});

export default Layout;