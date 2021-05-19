import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, Modal } from "react-native";
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageViewer from "react-native-image-zoom-viewer";

export default function Content({ route }) {
  const [isFullScreen, setFullScreen] = useState(false);
  return (
    <FlatList
      style={Styles.container}
      ListHeaderComponent={
        <View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>{route.params.content.title}</Text>
          </View>
          <View style={Styles.contentContainer}>
            <Text selectable style={Styles.content}>
              {route.params.content.contents}
            </Text>
          </View>
          {route.params.content.image && (
            <View
              style={{
                width: "100%",
                height: 400,
                backgroundColor: "#121212",
              }}
            >
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                resizeMode="contain"
                source={route.params.content.image}
              />
              <MDIcon
                onPress={() => {
                  setFullScreen(true);
                }}
                name="fullscreen"
                style={{
                  position: "absolute",
                }}
                size={35}
                color={"#fff"}
              />
              <Modal
                animationType="fade"
                transparent={true}
                visible={isFullScreen}
                supportedOrientations={["landscape"]}
              >
                <View
                  style={{
                    backgroundColor: "#000",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ImageViewer
                    imageUrls={[
                      {
                        props: {
                          source: route.params.content.image,
                        },
                      },
                    ]}
                  />

                  <MDIcon
                    onPress={() => {
                      setFullScreen(false);
                    }}
                    name="fullscreen-exit"
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                    }}
                    size={30}
                    color={"#fff"}
                  />
                </View>
              </Modal>
            </View>
          )}
        </View>
      }
      data={route.params.content.list}
      renderItem={({ item, index }) => (
        <Text key={index} selectable style={Styles.contentList}>
          {item}
        </Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    color: "#969696",
    fontSize: 25,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  content: {
    color: "#3b3b3b",
    fontSize: 20,
    lineHeight: 40,
  },
  contentList: {
    color: "#1a1a1a",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
