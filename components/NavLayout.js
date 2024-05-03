import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import BottomNav from './donorBottomNav'
import { usePathname } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function NavLayout({ children }) {
    const route = usePathname();
    return (
        <View style={styles.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView contentContainerStyle={{ minHeight: "100%" }} showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>
                </KeyboardAvoidingView>
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "relative",
        justifyContent: 'space-between',
    },
    screen: {
        flex: 1,
    },
})