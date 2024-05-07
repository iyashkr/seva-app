import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Delivery, Clock } from './icons'

export default function FoodItemData({ food }) {

  return (
    <View style={{ marginTop: 15, marginBottom: 5 }}>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <Image
          source={{ uri: food.images[0] }}
          style={styles.foodImages}
        />
        <View style={{ gap: 10, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>{food?.title}</Text>
          <View style={{ flexDirection: "row", gap: 50 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Delivery />
              <Text style={{ fontSize: 14 }}>
                {food?.price}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Clock />
              <Text>
                20 min
              </Text>
            </View>
          </View>
        </View>
      </View>
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
  foodImages: {
    width: "25%",
    height: 65,
    borderRadius: 10
  },

})