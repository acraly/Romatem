import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Image } from "@rneui/base";
// import { ScrollView } from "react-native-gesture-handler";

export default function PatientExercise({ navigation }) {
  const exercises = require("../helpers/myExercise.json");
  return (
    <View   style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      minHeight: `90%`,
      backgroundColor:`#F7DCCB`,
    

    }}  >
      <ScrollView>
        {exercises.map((exercise) => (
          <Card
            onPress={() =>
              navigation.navigate(`patient-exercise-detail`, { exercise })
            }
            style={{
              margin: 10,
              padding: 35,
              backgroundColor: `#E37737`,
              
            }}
          >
            <Card.Content
              style={{
                // backgroundColor:'red',
                display: `flex`,
                flexDirection: `row`,
                // justifyContent: `space-between`,
              }}
            >
              {/* <View>
              <Image
                style={{ width: 70, height: 70, borderRadius: 50 }}
                source={{ uri: exercise.image }}
              />
            </View> */}
              <View>
                <Text
                  style={{
                    color: `black`,
                    fontWeight:'bold',
                    fontSize: 30,
                    padding: 15,
                    alignItems: "center",
                  }}
                  variant="titleLarge"
                >
                  {exercise.egzersiz_adi}
                </Text>
                <Text
                  style={{ color: `white`, fontSize: 22 }}
                  variant="titleLarge"
                >
                  Tekrar Sayısı: {exercise.tekrar_sayisi}
                </Text>
                <Text
                  style={{ color: `white`, fontSize: 22 }}
                  variant="titleLarge"
                >
                  Set Sayısı: {exercise.set_sayisi}
                </Text>
                <Text
                  style={{ color: `white`, fontSize: 15 }}
                  variant="titleLarge"
                >
                  Tedavi Baslama: 15/12/2023
                </Text>
              </View>
            </Card.Content>
            <Card.Actions></Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
