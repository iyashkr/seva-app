// import React, { useState, useMemo } from 'react'
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { BackButton, Back, Delivery, Clock, Call} from "../components/icons";
// import { router } from 'expo-router';

// export default function OrderInfo() {
  
//     return (
//         <View style={{marginTop: 35, }}>
//           <View style={{flexDirection: "row", gap: 20, alignItems: 'center' }}>
//               <Image style={[styles.foodImages, {}]} source={require('../assets/images/SampleFood.png')}/>
//               <View style={{gap: 5}}>
//                 <Text style={{color: '#181C2E', fontSize: 18, fontWeight: 500}}>20kg Daal & 200 Roti</Text>
//                 <Text style={{color: "#A0A5BA", fontSize: 14}}>500m From your location</Text>
//                 <View style={{flexDirection: "row", gap: 30,}}> 
//                   <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5}}>
//                   <Delivery/>
//                   <Text style={{fontSize: 12}}>Free</Text>
//                   </View>
//                   <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5}}>
//                   <Clock/>
//                   <Text style={{fontSize: 12}}>20 min</Text>
//                   </View>
//                 </View>
//               </View>
//             </View>
            
//             <View style={{flexDirection: "row", justifyContent: "center", marginTop: 30, gap : 20}}>
//               <View style={{flex: 1,}}>
//                 <Text style={{fontSize: 14, fontWeight: 450, color: "#A0A5BA"}}>DAAL</Text>
//                 <TextInput placeholder='Quantity' style={[styles.textInput, {width: "100%", marginTop: 10, height: 47, paddingLeft: 20}]}/>
//               </View>
//               <View style={{flex:1}}>
//                 <Text style={{fontSize: 14, fontWeight: 450, color: "#A0A5BA"}}>ROTI</Text>
//                 <TextInput placeholder='Quantity' style={[styles.textInput, {width: "100%", marginTop: 10, height: 47, paddingLeft: 20}]}/>
//               </View>
//             </View>
            
//             <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>
//               <Image source={require('../assets/images/SampleFood.png')} style={{ backgroundColor: "#FFFFFF", height: 54, width: 54, borderRadius: 100, marginRight: 15,}}/>
//               <View style={{flex:3}}>
//                 <Text style={{fontSize: 20, fontWeight: 700, color: "#32343E",}}>
//                     Vishal Khadka
//                 </Text>
//                 <Text style={{fontSize: 14, fontWeight: 400, color: "#A0A5BA"}}>
//                     Donor
//                 </Text>
//               </View>
//               <TouchableOpacity style={{flex:1}}>
//                 <Call/>
//               </TouchableOpacity>
//             </View>
            
//             <View style={{marginTop: 15}}>
//               <Text style={{fontSize: 14, fontWeight: 400, color: "#A0A5BA"}}>DELIVERY ADDRESS</Text>
//               <TextInput placeholder='Enter address' style={[styles.textInput, {width: "100%", marginTop: 10, height: 62, paddingLeft: 20}]}/>
//               <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
//                 <Text style={{fontSize: 14, fontWeight: 400, color: "#A0A5BA", marginTop: 20}}>TOTAL:</Text>
//                 <Text style={{fontSize: 20, fontWeight: 400, color: "#181C2E", marginTop: 20}}>FREE</Text>
//               </View>
//             </View>
            
              
//             <TouchableOpacity style={[styles.submitBtn, { marginVertical: 15 }]}>
//               <Text style={{color: "#FFFFFF", fontSize: 18, fontWeight: 500, }}>
//                 PLACE ORDER
//               </Text>
//             </TouchableOpacity>      
//         </View>
//     )
//   }
//   const styles = StyleSheet.create({
//     container: {
//       height: "100%",
//       width: "100%",
//       backgroundColor: "lightgreen",
//       position: "relative",
//       paddingHorizontal: 25,
      
//     },
//     containerModal: {
//       height: "100%",
//       width: "100%",
//       backgroundColor: "#FFFFFF",
//       position: "relative",
//       paddingHorizontal: 25,
//       paddingVertical: 15,

//     },
    
//     textInput: {
//       borderWidth: 1,
//       backgroundColor: "#F0F5FA",
//       borderColor: "#F0F5FA",
//       borderRadius: 10,
//       position: "relative",
//       color: "#A0A5BA",
//       paddingLeft: 10,
//     },
//     signUpButton: {
//       marginTop: 20,
//       width: "100%",
//       alignItems: "center",
//       justifyContent: "center",
//       height: 70,
//       backgroundColor: "#FF7622",
//       borderRadius: 15,
//     },
    
//     foodImages: {
//       borderRadius: 13,
//       height: 77,
//       width: 83
//     },
//     submitBtn: {
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#FF7622",
//         height: 62,
//         borderRadius: 10,
//         marginTop: 35,
//         width: "100%",
//     },

//   })

  