import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BlackBackBtn, Delivery, Clock, Call } from "../../components/icons";
import { router, useLocalSearchParams } from 'expo-router';
import MapView, { Marker } from "react-native-maps";
import * as location from 'expo-location';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import NavLayout from '../../components/NavLayout';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaaseConfig';


export default function OrderDetails() {
  const params = useLocalSearchParams();
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    async function getFood() {
      const document = await getDoc(doc(FIREBASE_DB, "orders", params.id));
      const userDoc = await getDoc(doc(FIREBASE_DB, "users", document.data().uid));
      setUser(userDoc.data());
      setData({ ...document.data(), id: document.id });
    }
    getFood()
    userLocation();
    handlePresentModalPress();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current && bottomSheetModalRef.current.present();
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        disappearsOnIndex={0}
        appearsOnIndex={1}
        enableTouchThrough={true}
        pressBehavior="collapse"

        {...props}
      />
    ),
    []
  );

  const handleDial = () => {
    const phoneNumber = '1234567890'; // Replace this with the desired phone number
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0101,
    longitudeDelta: 0.0101,

  });
  const [mapRegion2, setMapRegion2] = useState({
    latitude: 31.256528663848965,
    longitude: 75.70717780492313,
    latitudeDelta: 0.0622,
    longitudeDelta: 0.0321,
  });

  const userLocation = async () => {
    let { status } = await location.requestForegroundPermissionsAsync({ enableHighAccuracy: true });
    if (status === 'granted') {
      let locationData = await location.getCurrentPositionAsync({});
      setMapRegion(prevRegion => ({
        ...prevRegion,
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      }));
    } else {
      console.log('Location permission denied');
    }
  }

  async function raiseOrder() {
    await updateDoc(doc(FIREBASE_DB, "orders", data?.id), { status: "completed" }).then(res => {
      router.replace('/orderSuccess')
    }).catch(err => Alert.alert(err.message));
  }

  var getInitials = function (string) {
    var initials = "";
    var names = string.split(' ');
    for (n = 0; n < names.length; n++) {
      initials += names[n].substring(0, 1).toUpperCase();
    }
    return initials;
  };
  return (
    <NavLayout>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", margin: 30, gap: 20, backgroundColor: "transparent", top: 0, zIndex: 2, position: "absolute" }}>
            <TouchableOpacity activeOpacity={0.2} onPress={() => router.back()}>
              <BlackBackBtn />
            </TouchableOpacity>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ fontSize: 20, color: "#181C2E" }}>Order Details</Text>
            </View>
          </View>
          <View style={styles.map}>
            <MapView style={{ height: "100%" }}
              region={mapRegion}
            >
              <Marker coordinate={mapRegion} title='Your Location' pinColor='#50C878' />
              <Marker coordinate={mapRegion2} title='Food Source' />
            </MapView>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={['16%', '70%', '73%']}
            backdropComponent={renderBackdrop}
            animateOnMount={true}
            enablePanDownToClose={false}
            handleComponent={() => (
              <View style={styles.header}>
                <View style={styles.panelHandle} />
              </View>
            )}

          >
            <View style={styles.containerModal}>
              <View style={{ flexDirection: "row", gap: 20, alignItems: 'center' }}>
                {data?.images?.length > 0 && <Image style={styles.foodImages} source={{ uri: data?.images[0] }} />}
                <View style={{ gap: 3 }}>
                  <Text style={{ color: '#181C2E', fontSize: 18, fontWeight: 500 }}>{data?.title}</Text>
                  <Text style={{ color: "#A0A5BA", fontSize: 14 }}>500m From your location</Text>
                  <View style={{ flexDirection: "row", gap: 30, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                      <Delivery />
                      <Text style={{ fontSize: 12 }}>{data?.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                      <Clock />
                      <Text style={{ fontSize: 12 }}>20 min</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, gap: 20 }}>
                <View style={{ flex: 1, }}>
                  <Text style={{ fontSize: 14, fontWeight: 500, color: "#A0A5BA" }}>ITEM</Text>
                  <BottomSheetTextInput placeholder='Quantity' style={[styles.textInput, { width: "100%", marginTop: 10, height: 47, paddingLeft: 20 }]} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: 500, color: "#A0A5BA" }}>QUANTITY</Text>
                  <BottomSheetTextInput placeholder='Quantity' style={[styles.textInput, { width: "100%", marginTop: 10, height: 47, paddingLeft: 20 }]} />
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <View style={{ backgroundColor: "black", height: 54, width: 54, borderRadius: 50, marginRight: 15, flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                  {user?.name && <Text style={{ color: "white", fontSize: 24 }}> {getInitials(user?.name)} </Text>}
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={{ fontSize: 20, fontWeight: 700, color: "#32343E", }}>
                    {user?.name}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: 400, color: "#A0A5BA" }}>
                    Donor
                  </Text>
                </View>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => handleDial()}>
                  <Call />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 14, fontWeight: 500, color: "#A0A5BA" }}>DELIVERY ADDRESS</Text>
                <BottomSheetTextInput placeholder='Enter address' style={[styles.textInput, { width: "100%", marginTop: 10, height: 62, paddingLeft: 20 }]} />
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <Text style={{ fontSize: 14, fontWeight: 400, color: "#A0A5BA", marginTop: 20 }}>TOTAL:</Text>
                  <Text style={{ fontSize: 20, fontWeight: 500, color: "#181C2E", marginTop: 20 }}>{data?.price}</Text>
                </View>
              </View>


              <TouchableOpacity style={[styles.submitBtn, {}]} onPress={() => raiseOrder()}>
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
                  PLACE ORDER
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>

        </View>
      </BottomSheetModalProvider>
    </NavLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  containerModal: {
    paddingHorizontal: 25,
    paddingVertical: 35,
    backgroundColor: "#FFFFFF"
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#F0F5FA",
    borderColor: "#F0F5FA",
    borderRadius: 10,
    position: "relative",
    color: "#A0A5BA",
    paddingLeft: 10,
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

  foodImages: {
    borderRadius: 13,
    height: 70,
    width: 83
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7622",
    height: 62,
    borderRadius: 10,
    marginVertical: 35,
    width: "100%",
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 15, // Adjust the height as needed
    justifyContent: 'center',
  },
  panelHandle: {
    backgroundColor: '#D8E3ED',
    borderRadius: 15,
    height: 8,
    width: "20%",
    marginTop: 10
  },
})