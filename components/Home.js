import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, Icon } from "@rneui/base";
import { Input } from "@rneui/themed";
import LoginScreen from "../pages/Login";

const Home = ({navigation}) => {
  const [first, setfirst] = useState(0);
  const handleClick = (position) => {
    position === "+" ? setfirst(first + 1) : setfirst(first - 1);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: first === 0 ? "white" : first < 0 ? "red" : "blue",
      alignItems: "center",
      display:"flex",
      justifyContent:"center",
      minHeight:"100%"
    },
    containerCo: {
      // width:"50vw",
      flexDirection: "row",
      alignItems: "center",
      // justifyContent: "space-between",
    },
    ctext:{padding:20},
    text: {
      padding: 60,
      borderRadius: 5,
      backgroundColor: "purple",
      marginBottom: 6,
      color: "cyan",
      fontWeight: "bold",
      textAlign: "center",
      margin: 3,
      alignSelf: "flex-start",
    },
  });
  return (
    <ScrollView>

    <Text>Home Page</Text>
    <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
            onPress={() => navigation.navigate(`Port`)}
          />
        </Card>
        <Input
      placeholder='Kullanici Adi'
      leftIcon={
        <Icon
        leftIcon={{ type: 'font-awesome', name: 'user' }}
          size={44}
          color='black'
        />
      }
    />
        <Input placeholder="Password" secureTextEntry={true} />
        <LoginScreen/>
    {/* <ScrollView>
      <Text style={styles.ctext}>{first}</Text>
      <View style={styles.containerCo}>
        <TouchableOpacity
          key="3"
          style={styles.text}
          onPress={() => handleClick("+")}
        >
          <Text style={{ color: "white" }}>Artı</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key="1"
          style={styles.text}
          onPress={() => handleClick("-")}
        >
          <Text style={{ color: "white" }}>Eksi</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity
          key="0"
          style={styles.text}
          onPress={() => navigation.navigate(`Navbar`)}
        >
          <Text style={{ color: "white" }}>Portfolyo</Text>
        </TouchableOpacity>

        </ScrollView> */}
        </ScrollView>
    
  );
};

export default Home;
