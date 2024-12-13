import { View, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from "./Screen/Header"
import Header2 from './Screen/Header2'
import Body from './Components/Body'
import Footer from './Screen/Footer'


const App = () => {


  return (
    <View style={{flex: 1}}>
     <ScrollView>
    <View style={{flex: 1, backgroundColor: "#0b1014"}}>
    <Header />
   <TouchableOpacity>
    <Header2 />
    </TouchableOpacity>
    <Body  srcImage={require("./Image/apcb.jpeg")}
            name={"Kalisha"}
            message={"Selamat Pagi"}
    />
    <Body srcImage={require("./Image/btc.jpeg")}
          name={"Satoshi"}
          message={"Ohayou Ghozaimashu"}
    />
    <Body srcImage={require("./Image/bv.jpeg")}
          name={"Queen Bee"}
          message={"Let's go to the beach"}
    />
    <Body srcImage={require("./Image/gann.jpeg")}
          name={"Gann"}
          message={"Buy XAUUSD today"}
    />
    <Body srcImage={require("./Image/george.jpeg")}
          name={"George"}
          message={"in the past on year 1994"}
    />
    <Body srcImage={require("./Image/ICT.jpeg")}
          name={"Michael J. Huddleston"}
          message={"Kids don't be rude on your trade"}
    />
    <Body srcImage={require("./Image/khb.jpeg")}
          name={"Caty"}
          message={"When you bought the whiskas"}
    />
    <Body srcImage={require("./Image/nolan.jpeg")}
          name={"Timothy"}
          message={"jangan tidur!"}
    />
    <Body srcImage={require("./Image/rnef.jpeg")}
          name={"React Nativer"}
          message={"Belajar React Native"}
    />
    <Body srcImage={require("./Image/ryn.jpeg")}
          name={"Sepat"}
          message={"FOCUS On Your Goals"}
    />
    <View style={{height: 50}}></View>
    </View>
    </ScrollView>
    <Footer />
    </View>
    
    
  )
}

export default App