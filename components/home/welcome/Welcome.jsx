import { useState } from "react";
import {
  View, //div
  Text, //p
  TextInput, //input
  TouchableOpacity, //button
  Image, //image
  FlatList, //map many items
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}></View>
    </View>
  );
};

export default Welcome;
