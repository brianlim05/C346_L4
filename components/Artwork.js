import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Artwork = ({ title, year, workType, description, image }) => (
    <View style={styles.card}>
        {/* Artwork Title */}
        <View style={styles.titleRow}>
            <FontAwesome6 name="palette" size={16} color="#333" style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>

        {/* Year + Work Type */}
        {(year || workType) && (
            <Text style={styles.meta}>
                {year}
                {year && workType ? " • " : ""}
                {workType}
            </Text>
        )}

        {/* Artwork Image */}
        <Image source={image} style={styles.image} />

        {/* Description */}
        {description ? <Text style={styles.description}>{description}</Text> : null}

        {/* Heart Icon */}
        <FontAwesome6 name="heart" size={20} color="#b23b23" style={styles.heart} />
    </View>
);

const styles = StyleSheet.create({
    card: {
        marginBottom: 30,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    icon: {
        marginRight: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#333",
    },
    meta: {
        fontSize: 12,
        color: "#777",
        marginBottom: 8,
    },
    image: {
        width: "100%",
        height: 220,
        resizeMode: "cover",
        borderRadius: 6,
        marginBottom: 6,
    },
    description: {
        fontSize: 13,
        color: "#555",
        marginBottom: 4,
    },
    heart: {
        alignSelf: "flex-start",
    },
});

export default Artwork;
