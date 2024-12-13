import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Body = ({srcImage, name, message}) => {
  return (
    <TouchableOpacity>
    <View style={{flexDirection: "row"}}>
      <Image source={srcImage} style={{
        height: 70, width: 70, borderRadius: 35, margin: 10, borderColor: "gray", borderWidth: 1
      }}/>
      <View style={{ justifyContent: "center"}}>
        <Text style={{ color: "white", fontSize: 30}}>{name}</Text>
        <Text style={{ color: "white", fontSize: 20, }} >{message}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Body