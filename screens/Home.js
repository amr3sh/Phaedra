import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Image, Icon } from "@rneui/themed";
import { images } from "../constants";

export default function Home({ navigation }) {
  const handleOnPress = () => {
    navigation.navigate("Capture", { data: null });
  };

  return (
    <ImageBackground
      source={images.background1}
      style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
    >
      <View>
        <Image
          source={images.logo}
          style={{
            flex: 0.7,
            height: 300,
            width: 420,
            resizeMode: "contain",
            marginTop: -39,
          }}
        />
        <Button
          buttonStyle={styles.btnAlignment}
          iconRight
          title="Get Started"
          onPress={handleOnPress}
          icon={<Icon name="arrow-right" size={30} color="white" />}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 0.2,
    borderRadius: 25,
    marginTop: 100,
  },
});
