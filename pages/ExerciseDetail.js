import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import { auth } from '../firebase';
import { Video } from 'expo-av';
import WebView from 'react-native-webview';
// import Video from 'react-native-video';
// import { VideoFullscreenUpdate } from 'expo-av';
// import VideoPlayer from 'react-native-video-player';
// import Video from 'react-native-video';
//  const item = [ {egzersiz_adi: "Kalça Rotasyonu",
//  aciklama: "Düz bir zeminde sırt üstü yatın. Dizlerinizi bükün veÜzgünüm, ancak metin sınırı nedeniyle tamamlanamayan bir JSON örneği verdim. İhtiyaç duyduğunuz 30 egzersiz ile devam etmek için aşağıdaki örneği kullanabilirsiniz:`"
// ,tekrar_sayisi: 1,
//  set_sayisi: 3,
//  video:"https://metamy.b-cdn.net/media/video/1.D%C3%B6nem/Front-End_Devolopment/10_Veri_T%C3%BCrleri___JAVASCRIPT_Dersleri.mp4"}]

const ExerciseDetail = () => {
  const exercises = require("../helpers/myExercise.json");
  console.log(exercises);
    const route = useRoute();

  const { exercise } = route.params;
  const video = React.useRef(null);
  // const secondVideo = React.useRef(null);
  const [status,setStatus]=React.useState({})
  // const [statusSecondVideo,setStatusSecondVideo]=React.useState({})


  return (
    <ScrollView  contentContainerStyle={styles.container}>
     <Video 
     ref={video}
<<<<<<< HEAD
     source={{uri:"https://romatem.b-cdn.net/Denge%20%7C%20Uygulama%20Egzersizleri/Tandem.mp4"}}
=======
     style={styles.video}
     source={{uri:"https://metamy.b-cdn.net/media/video/1.D%C3%B6nem/Front-End_Devolopment/Solunum_egzersizleri.mp4"}}
>>>>>>> f02f8c5ab0c87af3e0e3b6f5fd6bec244e40aa2a
     useNativeControls
     resizeMode='contain'
     isLooping
    //  onPlaybackStatusUpdate={setStatus}
      />
{/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
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
  video:{
    flex:1,
    // flexDirection:'column',
    // justifyContent:'flex-start',
    alignSelf:'stretch',
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ExerciseDetail;

