import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AddItem, Dashboard, List, Notification, Profile, DashboardActive, NotificationActive, ListActive, ProfileActive} from './icons'
import { router } from 'expo-router';

export default function BottomNav({ route }) {
    const [activeTab, setActiveTab] = useState(1); // Set the initial active tab
    const tabs = [
        {
            tab: "/donorDashboard",
            id: 1
        },
        {
            tab: "/donorReviews",
            id: 2
        },
        {
            tab: "/addItems",
            id: 3
        },
        {
            tab: "/donorNotification",
            id: 4
        },
        {
            tab: "/profile",
            id: 5
        }
    ];

    useEffect(() => {
        const tabIndex = tabs.findIndex(tab => tab.tab === route);
        if (tabIndex !== -1) {
            setActiveTab(tabIndex + 1);
        } else {
            setActiveTab(0);
        }
    }, [route]);

    const handleTabPress = (tab) => {
        router.navigate(tabs[tab].tab);
        setActiveTab(tabs[tab].id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tab}>
                <TouchableOpacity style={styles.icon} onPress={() => handleTabPress(0)}>
                    {activeTab === 1 ? <DashboardActive /> : <Dashboard />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity style={styles.icon} onPress={() => handleTabPress(1)}>
                    {activeTab === 2 ? <ListActive /> : <List />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity style={{}} onPress={() => handleTabPress(2)}>
                    <AddItem/>
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity style={styles.icon} onPress={() => handleTabPress(3)}>
                    {activeTab === 4 ? <NotificationActive /> : <Notification />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity style={styles.icon} onPress={() => handleTabPress(4)}>
                    {activeTab === 5 ? <ProfileActive /> : <Profile />}
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        borderTopWidth: 1,
        borderColor: "#706D6D2B",
        backgroundColor: "#FFFFFF",
        shadowColor: "#AFAFAF",
        borderTopLeftRadius: 25,
        borderTopRighttRadius: 25,

    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 24,
        width: 25,
        justifyContent: 'center',
    }
})