import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native"; // Import the Image component
import {
    GestureHandlerRootView,
    ScrollView,
} from "react-native-gesture-handler";

const profile = () => {
    return (
        <GestureHandlerRootView>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.background}
                        source={{
                            uri: "https://media1.tenor.com/m/RsjutCDdpg0AAAAC/spinning-monkey.gif",
                        }}
                    >
                        <View style={styles.overlay} />
                    </ImageBackground>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://media1.tenor.com/m/2gyy4BcsLWsAAAAd/monkey-confused.gif",
                        }}
                    ></Image>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>Monke</Text>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.infoC}>
                            <Text style={styles.info}>Age: Timeless</Text>
                        </View>
                        <View style={styles.infoC}>
                            <Text style={styles.info}>Location: Not here</Text>
                        </View>
                        <View style={styles.infoC}>
                            <Text style={styles.info}>
                                Email: Monke@banan.oo
                            </Text>
                        </View>
                        <View style={styles.infoC}>
                            <Text style={styles.info}>Phone number: Banan</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255,255,255, 0.4)",
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 5,
        marginTop: 50,
    },
    textContainer: {
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "grey",
        alignSelf: "center",
        width: 300,
    },
    name: {
        fontSize: 50,
    },
    list: {
        fontSize: 20,
        color: "black",
        padding: 20,
        borderColor: "green",
        borderWidth: 2,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.7)",
    },
    bottom: {
        height: 500,
        width: 400,
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "rgba(255,255,255,0.7)",
        padding: 20,
    },
    infoC: {
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 20,
        marginTop: 15,
    },
    info: {
        fontSize: 20,
        padding: 10,
    },
});
