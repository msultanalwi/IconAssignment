import { View, Text, Touchable, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather';


const Header = () => {

  const [seen, setSeen] = useState (false)

  const reqCloseModal = () => {
    setSeen (false)
  }

  const openModal = () => {
    setSeen (true)
  }

  return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10}}>
      <Text style={{fontSize: 30, color: "#26a968", fontWeight: "bold"}}>WhatsApp</Text>
      <View style={{flexDirection: "row", width: 150, justifyContent: "space-between"}}>
      <TouchableOpacity>
      <Feather name="camera" size={30} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Feather name="search" size={30} color={"white"} />
      </TouchableOpacity>

      <Modal visible={seen} transparent={true} onRequestClose={() => reqCloseModal()}>
    <View style={{width: 200, height: "30%", backgroundColor:"#13181c", alignContent: "center",justifyContent: "center", marginVertical: 60, marginLeft: "56%" }}>
      <View style={{marginLeft: 5}}>
      <TouchableOpacity>
        <Text style={{color: "white", fontSize: 20, marginVertical: 10}}>New Group</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: "white", fontSize: 20, marginVertical: 10}}>New BroadCast</Text>
        </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: "white", fontSize: 20, marginVertical: 10}}>Linked Devices</Text>
        </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: "white", fontSize: 20, marginVertical: 10}}>Starred Messages</Text>
        </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: "white", fontSize: 20, marginVertical: 10}}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
      </Modal>


      <TouchableOpacity onPress={() => openModal()}>
      <Feather name="more-vertical" size={30} color={"white"} />
      </TouchableOpacity>
      </View>
        </View>

  )
}

export default Header