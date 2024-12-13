import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Footer = () => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      height: 60,
      width: "100%",
      position: "absolute",
      bottom: 0,
      padding: 10,
      backgroundColor: "#0b1014"
    
    }}>

<TouchableOpacity style={{ alignItems: "center" }}>
        <Feather name="message-square" size={30} color={"white"} />
        <Text style={{ fontSize: 15, color: "white" }}>Chats</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: "center" }}>
        <MaterialCommunityIcons name="update" size={30} color={"white"} />
        <Text style={{ fontSize: 15, color: "white" }}>Updates</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: "center" }}>
        <FontAwesome6 name="users" size={25} color={"white"} />
        <Text style={{ fontSize: 15, color: "white" }}>Communities</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ alignItems: "center" }}>
        <FontAwesome6 name="phone" size={25} color={"white"} /> 
        <Text style={{ fontSize: 15, color: "white" }}>Calls</Text>
      </TouchableOpacity>

      </View>
  )
}

export default Footer