import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#243B55", "#ffd89b"],
    title: "Thunderstorm",
    subtitle: "Look at that, It's Thor!!"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#0083B0", "#00B4DB"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🌈"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#182848", "#4b6cb7"],
    title: "It's Raining",
    subtitle: "The flashy lights cover me."
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA"],
    title: "Snow",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5433FF", "#20BDFF", "#A5FECB"],
    title: "Sunny",
    subtitle: "Go get your ass burnt."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252", "#3d72b4"],
    title: "Clouds",
    subtitle: "I know, fucking boring."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#abbaab", "#3f2b96"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#8e9eab", "#DECBA4"],
    title: "Dusty",
    subtitle: "Thanks a lot, China 🖕"
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3f2b96", "#8CA6DB"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName || "weather-sunset"}
          color="white"
        />
        <Text style={styles.temp}>{temp}&deg;</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
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
    flex: 1
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
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 40
  }
});
