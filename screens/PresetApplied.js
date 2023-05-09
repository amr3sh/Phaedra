import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Pressable, View } from "react-native";
import CameraRoll from "@react-native-camera-roll/camera-roll";
import { Icon, Text, Image } from "@rneui/themed";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { Snackbar } from "react-native-paper";

import localImage from '../assets/images/temp-2.jpg';

export default function PresetApplied({ route, navigation }) {
  const previewImage = useRef(null);
  const [picUrl, setPicUrl] = useState(null);
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    const { picUrl } = route.params;
    debugger
    console.log("THE NEW FORMAT OF URL")
    console.log(picUrl)
    setPicUrl(picUrl);
  }, [route]);

  const saveImage = () => {
    CameraRoll.save(previewImage.current.props.source.uri)
      .then((res) => {
        setVisible(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View>
      <ImageBackground
        ref={previewImage}
        // source={{ uri: `${picUrl}` }}
        source={localImage}
        style={{ height: SIZES.height + 50, width: SIZES.width }}
        blurRadius={4}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: SIZES.height - 600,
          }}
        >
          <Image
            // source={{ uri: `${picUrl}` }}
            source={localImage}
            style={{ height: 500, width: 480 }}
            resizeMode="contain"
          />
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              padding: 15,
              width: SIZES.width - 60,
              marginTop: 0,
              elevation: 2,
              backgroundColor: "#ffffff",
            }}
            onPress={() => saveImage()}
          >
            <Icon name="download" type="material-community" size={50} />
            <Text style={{ ...FONTS.h3 }}>Download</Text>
          </Pressable>
        </View>
        <Snackbar
          duration={3000}
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{ backgroundColor: "#FFFFFF" }}
          theme={{ colors: { surface: "grey", accent: "black" } }}
          action={{
            label: "Done",
            onPress: () => onDismissSnackBar(),
          }}
        >
          Successfully saved the image to your Gallery.
        </Snackbar>
      </ImageBackground>
    </View>
  );
}
