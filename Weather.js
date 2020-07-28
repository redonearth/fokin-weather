import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#243B55", "#ffd89b"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#0083B0", "#00B4DB"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🌈"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#182848", "#4b6cb7"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA"]
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5433FF", "#20BDFF", "#A5FECB"]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252", "#3d72b4"]
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#abbaab", "#ffffff"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#eef2f3"]
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#B993D6", "#8CA6DB"]
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions["Drizzle"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions["Drizzle"].iconName || "weather-sunset"}
          color="white"
        />
        <Text style={styles.temp}>{temp}&deg;</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions["Drizzle"].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions["Drizzle"].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Dust",
    "Haze"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
