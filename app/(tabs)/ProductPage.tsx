import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Flatlistexample from "./flatlist"; // Import the Flatlistexample component

const Custom_text = () => {
  const [productImage, setProductImage] = useState(
    "https://media1.tenor.com/m/RsjutCDdpg0AAAAC/spinning-monkey.gif"
  );
  //"https://images.pexels.com/photos/221133/pexels-photo-221133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const changeImage = () => {
    setProductImage(
      require("C:/Users/amrin/Desktop/MobileDev/newApp/NewApp/assets/images/monke.png")
    );
    //C:\Users\amrin\Desktop\MobileDev\newApp\NewApp\assets\images\monke.png
  };
  return (
    <View>
      <Text style={styles.heading}>Monke</Text>
      <Image
        style={styles.image}
        source={
          typeof productImage === "string"
            ? { uri: productImage }
            : productImage
        }
      />
      <Text style={styles.paragraph}>
        Monke is a cool dude. He enjoys staring into your soul.
      </Text>
      <Button title="this is a button" onPress={changeImage} />
      <SafeAreaView>
        <Flatlistexample />
      </SafeAreaView>
    </View>
  );
};

export default Custom_text;

const styles = StyleSheet.create({
  heading: {
    fontSize: 100,
    fontWeight: "bold",
    color: "lightblue",
    marginTop: 100,
    alignSelf: "center",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  paragraph: {
    fontSize: 20,
    color: "lightblue",
    marginTop: 20,
    alignSelf: "center",
  },
});
