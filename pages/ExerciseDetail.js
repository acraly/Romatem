// import { View, Text, Image } from "react-native";
// import React from "react";
// import { useRoute } from "@react-navigation/native";
// import {
//   Button,
//   Card,
//   Avatar,
//   IconButton,
//   SliderBox,
// } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
// export default function ExerciseDetail() {
//   const route = useRoute();
//   const { name, surname, image } = route.params;
//   return (
//     <View>
//       <Card>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card title</Text>
//           <Text variant="bodyMedium">Card content</Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button>Tamamlandı</Button>
//         </Card.Actions>
//       </Card>
//     </View>
//   );
// }

import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { auth } from '../firebase';
import VideoPlayer from 'react-native-video-player';

const ExerciseDetail = () => {
  // const exercises = require("../helpers/myExercise.json");
  // console.log(exercises);
    const route = useRoute();

  const { exercise } = route.params;

  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <View style={styles.sliderContainer}>
        <VideoPlayer
        video={{uri:exercise.video}}
        autoplay={false}
        defaultMuted={true}
        videoWidth={1500}
        videoHeight={1000}
        />
      {/* <Swiper style={styles.wrapper} showsButtons={true}>
      <View syle={{display:`flex`,justifyContent:`center`}}>
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />

      </View>
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />

    </Swiper> */}

        {/* Diğer resimler buraya eklenebilir */}
      </View>
      <Text style={styles.exerciseName}>{exercise.egzersiz_adi}</Text>
      <Text style={styles.description}>{exercise.aciklama}</Text>
      <Text style={styles.infoText}>Tekrar Sayısı: {exercise.tekrar_sayisi}</Text>
      <Text style={styles.infoText}>Set Sayısı: {exercise.set_sayisi}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F7DCCB',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sliderContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sliderImage: {
    width: 350,
    height: 350,
    marginRight:`auto`,
    marginLeft:`auto`,
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  wrapper: {
    height:330,
    textAlign:`center`
  },

});

export default ExerciseDetail;

