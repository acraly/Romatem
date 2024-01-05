import { View, Text } from "react-native";
import React from "react";

import { Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

export default function Navbar({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: `row`,
        justifyContent: `space-between`,
        padding: 30,
        backgroundColor: "#E37737",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        zIndex:999
      }}
    >
      <Avatar
        size={45}
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={{
          backgroundColor: "#023047",
          marginTop: 25,
          marginLeft: 5,
        }}
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Text style={{marginTop:45, marginRight:"auto", marginLeft:10, fontWeight:600,fontSize:15,fontFamily: 'Cochin', }}>Hoşgeldin Ali</Text>
      <Avatar
        size={45}
        icon={{ name: "stethoscope", type: "font-awesome" }}
        containerStyle={{
          // backgroundColor: "",
          marginTop: 25,
          marginLeft: 5,
        }}
        // style={{color:`black`}}
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Avatar
        size={45}
        rounded
        icon={{ name: "bell", type: "font-awesome" }}
        containerStyle={{
          backgroundColor: "#023047",
          marginTop: 25,
          marginLeft: 5,
        }}
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}
