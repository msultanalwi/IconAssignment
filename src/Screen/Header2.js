import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header2 = ({onPress}) => {
  return (

    <View>
    <View style={{
    borderWidth: 0.2,
    borderColor: 'gray',
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    
    }} >
     <MaterialCommunityIcons name="archive-arrow-down-outline" size={25} color={"white"} />
     <View style={{paddingHorizontal: 15, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}} >
     <Text style={{color: "white", fontSize: 20}}>Archived</Text>
     <View style={{flex: 1, alignItems: "flex-end", paddingRight: 10}}>
     <Text style={{color: "green"}}>7</Text>
     </View>
    </View>
    </View>
    </View>

  )
}

export default Header2