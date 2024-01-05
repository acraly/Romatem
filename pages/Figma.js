import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const IPhone1415Pro3 = () => {
  return (
    <View style={styles.iphone1415Pro3}>
      <Text style={styles.notAlmayaHemen}>{`Not Almaya
Hemen
Başlayın`}</Text>
      <View style={[styles.iphone1415Pro3Child, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415Pro3Item, styles.iphone1415Layout]} />
      <Image
        style={styles.postIt8896481Icon}
        contentFit="cover"
        source={require("../assets/postit-889648-1.png")}
      />
      <Text style={[styles.giriYap, styles.kaytOlTypo]}>Giriş Yap</Text>
      <Text style={[styles.kaytOl, styles.kaytOlTypo]}>Kayıt Ol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 50,
    width: 256,
    borderRadius: 20,
    left: 69,
    position: "absolute",
  },
  kaytOlTypo: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Imprima-Regular",
    position: "absolute",
  },
  notAlmayaHemen: {
    top: 94,
    left: 94,
    fontSize: 40,
    color: "#050505",
    textAlign: "center",
    fontFamily: "Imprima-Regular",
    position: "absolute",
  },
  iphone1415Pro3Child: {
    top: 643,
    backgroundColor: "#c436ff",
  },
  iphone1415Pro3Item: {
    top: 713,
    backgroundColor: "#fff",
  },
  postIt8896481Icon: {
    top: 286,
    left: 57,
    width: 279,
    height: 279,
    position: "absolute",
  },
  giriYap: {
    top: 650,
    left: 139,
  },
  kaytOl: {
    top: 720,
    left: 147,
  },
  iphone1415Pro3: {
    backgroundColor: "rgba(255, 196, 54, 0.9)",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro3;
