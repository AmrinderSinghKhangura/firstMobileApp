import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
} from "react-native";

const list = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Tablet", price: 399.99 },
  { id: 4, name: "Headphones", price: 199.99 },
  { id: 5, name: "Smartwatch", price: 299.99 },
  { id: 6, name: "Keyboard", price: 49.99 },
  { id: 7, name: "Mouse", price: 29.99 },
  { id: 8, name: "Monitor", price: 199.99 },
  { id: 9, name: "Printer", price: 149.99 },
  { id: 10, name: "Speaker", price: 99.99 },
];

const items = [
  {
    title: "Monkey going to class",
    url: "https://media1.tenor.com/m/ucPDLxi-pqkAAAAd/giantsbetta-small-monkey.gif",
  },
  {
    title: "Banana being eaten by monkey",
    url: "https://media1.tenor.com/m/nd6rC1fcc3oAAAAC/effy.gif",
  },
  {
    title: "Sofa monkey",
    url: "https://media1.tenor.com/m/VWI99ptYGe4AAAAd/bored-monkey-parya.gif",
  },
];

const Item = ({ title, image }: { title: string; image: string }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function likeHandler() {
    liked
      ? (setLiked(false), setLikes(likes - 1))
      : (setLiked(true), setLikes(likes + 1));
  }

  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.caption}>{title}</Text>
      <View style={styles.container}>
        {/* <Button title="Like" onPress={likeHandler} /> */}
        <Pressable onPress={likeHandler}>
          <Text style={styles.caption}>{liked ? "Unlike" : "Like"}</Text>
        </Pressable>
        <Text style={styles.caption}>{likes}</Text>
      </View>
    </View>
  );

};

const Flatlistexample = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item title={item.title} image={item.url} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Flatlistexample;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  caption: {
    fontSize: 20,
    color: "white",
    margin: 3,
    alignSelf: "center",
  },
  container: {
    alignSelf: "center",
    marginBottom: 30,
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
});
