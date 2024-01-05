import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { Button, Card } from "react-native-paper";
import Navbar from "../components/Navbar";
import { Image } from "@rneui/base";

export default function PatientHome({ navigation }) {
  const styles = StyleSheet.create({
    // text: {
    //   padding: 60,
    //   borderRadius: 5,
    //   backgroundColor: "purple",
    //   marginBottom: 6,
    //   color: "cyan",
    //   fontWeight: "bold",
    //   textAlign: "center",
    //   margin: 3,
    //   alignSelf: "flex-start",
    // },
  });
  return (
    <View>
      <Navbar />

      <View
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          minHeight: `90%`,
          backgroundColor: `#F7DCCB`,
          marginTop: -30,
        }}
      >
        <Card
          onPress={() => navigation.navigate(`patient-exercise`)}
          style={{ margin: 5, padding: 45, backgroundColor: `#E37737` }}
        >
          <Card.Content>
          <Image
          style={{
            resizeMode: 'contain',
            height: 150,
            width: 150,
            marginBottom:20
          }}
          source={require('../assets/exercise_icon.png')}
        />
            <Text style={{ color: `white`, fontSize: 22,fontWeight:'500'}} variant="titleLarge">
              EGZERSIZLERIM
            </Text>
          </Card.Content>
          <Card.Actions></Card.Actions>
        </Card>
      </View>
    </View>
  );
}
