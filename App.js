import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Artwork from "./components/Artwork";

export default function App() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.header}>My Artwork Portfolio</Text>

            <Artwork
                title="GreenNudge Poster"
                year="2025"
                workType="School Work"
                description="A sustainability-themed poster designed for GreenNudge's environmental campaign."
                image={require("./img/GreenNudge Poster.png")}
            />

            <Artwork
                title="PolicyPal FB Banner"
                year="2020"
                workType="Intern Work"
                description="A social media banner created for PolicyPal's Facebook campaign."
                image={require("./img/PolicyPal FB Banner.jpg")}
            />

            <Artwork
                title="Ying Emote"
                year="2019"
                workType="Commission Work"
                description="A personalised emote design created for a client's Twitch channel."
                image={require("./img/ying emote.png")}
            />

            <Artwork
                 title="Character Design"
                 year="2025"
                 workType="School Work"
                 description="Character Design of myself in different animal outfits."
                 image={require("./img/Character Design.png")}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 10,
        marginTop:40,
    },
});
