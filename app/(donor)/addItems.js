import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Menu, BackButton, Back, AddImage, Plus, Pencil } from "../../components/icons";
import { router } from 'expo-router';
import { ScrollView } from 'react-native';
import NavLayout from '../../components/NavLayout';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
export default function AddItems() {

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});
  const [uid, setUid] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        setUid(user.uid)
      }
    });

    return unsubscribe;
  }, []);


  async function addImages() {
    try {
      const hasPermission = await ImagePicker.getCameraPermissionsAsync();
      if (!hasPermission || !hasPermission.granted) {
        await ImagePicker.requestCameraPermissionsAsync();
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.4,
      });
      if (!result.canceled) {
        setImages(prevArr => [...prevArr, result.assets[0].uri]);
      }
    } catch (error) {
      console.error('Error occurred while adding images:', error.message);
    }
  }





  async function createOrder() {
    try {
      let newErrors = {}
      if (images.length === 0) {
        newErrors.images = "Please add images"
      }
      if (!title.trim()) {
        newErrors.title = "Please add title"
      }
      if (!details.trim()) {
        newErrors.details = "Please add details"
      }
      if (!quantity.trim()) {
        newErrors.quantity = "Please add quantity"
      }
      if (!price.trim()) {
        newErrors.price = "Please add price"
      }
      if (Object.keys(newErrors).length > 0) {
        return
      }
      const uploadTasks = images.map(async (uri) => {
        const fileName = uri.split("/").pop();
        const { downloadUrl } = await uploadToFirebase(uri, fileName);
        return downloadUrl;
      });

      const urls = await Promise.all(uploadTasks);

      const document = {
        images: urls,
        title,
        price,
        quantity,
        details,
        uid,
        dateAdded: Date.now(),
        status: "pending"
      };

      const result = await addDoc(collection(FIREBASE_DB, "orders"), document);
      if (result) {
        return router.replace("/donorDashboard");
      }
    } catch (error) {
      return Alert.alert(error.message);
    }
  }


  const uploadToFirebase = async (uri, name, onProgress) => {
    const fetchResponse = await fetch(uri);
    const theBlob = await fetchResponse.blob();

    const imageRef = ref(getStorage(), `images/${name}`);

    const uploadTask = uploadBytesResumable(imageRef, theBlob);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress && onProgress(progress);
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          reject(error);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({
            downloadUrl,
            metadata: uploadTask.snapshot.metadata,
          });
        }
      );
    });
  };



  return (
    <NavLayout>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: 30, gap: 20, alignItems: "center", }}>
          <TouchableOpacity activeOpacity={0.2} onPress={() => router.navigate('/donorDashboard')}>
            <Back />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, color: "#32343E" }}>Add New Items</Text>
          <Text style={{ fontSize: 14, color: "#FB6D3A", paddingLeft: 100 }}>RESET</Text>
        </View>
        <View style={{ marginTop: 23 }}>
          <Text style={{ fontSize: 13, color: "#32343E", paddingBottom: 10 }}>TITLE</Text>
          <TextInput onChangeText={val => setTitle(val)} placeholder='e.g. 20 kg Dal Makhani & 40 kg rice' style={[styles.textInput, { height: 55 }]}></TextInput>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 13, color: "#32343E", paddingBottom: 5 }}>UPLOAD PHOTO/VIDEO</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.addImageContainer}>
              {images?.map((image, index) => (
                <Image key={index} style={styles.addImage} source={{ uri: image }} />
              ))}
              <TouchableOpacity style={styles.addImageBtn} onPress={() => addImages()}>
                <View activeOpacity={0.3} >
                  <AddImage />
                </View>
                <Text style={{ fontSize: 13, color: "#9C9BA6" }}>Add</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={{ fontSize: 13, color: "#32343E", paddingBottom: 10 }}>QUANTITY NAME</Text>
            <Pencil />
          </View>
          <TextInput onChangeText={(val) => setQuantity(val)} placeholder='e.g. 20 kg, 2litres' style={[styles.textInput, { height: 45 }]}></TextInput>
        </View>
        {/* <TouchableOpacity style={{ width: "43%" }}>
          <View style={{ marginTop: 15, alignItems: "centre", gap: 3, flexDirection: "row", }}>
            <Plus />
            <Text style={{ fontSize: 13, color: "#FF7622", paddingBottom: 10 }}>ADD MORE QUANTITY</Text>
          </View>
        </TouchableOpacity> */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 13, color: "#32343E", paddingBottom: 10 }}>DETAILS</Text>
          <TextInput onChangeText={text => setDetails(text)} multiline={true} style={[styles.textInput, { height: 110, }]}></TextInput>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 13, color: "#32343E", paddingBottom: 10 }}>PRICE</Text>
          <TextInput onChangeText={val => setPrice(val)} placeholder='Free/ ₹20, ₹30, ₹40' style={[styles.textInput, { height: 45 }]}></TextInput>
        </View>
        <TouchableOpacity style={[styles.submitBtn, {}]} onPress={() => createOrder()}>
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
            SAVE CHANGES
          </Text>
        </TouchableOpacity>
      </View>
    </NavLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    position: "relative",
    paddingHorizontal: 25,
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
    marginVertical: 25
  },
})