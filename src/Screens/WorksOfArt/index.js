import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import data from "../../../data";

export default function WorksOfArt({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.worksOfArt}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            style={styles.cardTopic}
            onPress={() => {
              navigation.navigate("Conteúdo", {
                content: {
                  title: item.name,
                  contents: item.content,
                  image: item.image,
                },
              });
            }}
          >
            <Card.Cover resizeMode="cover" source={item.image} />
            <Card.Title
              titleStyle={{ alignSelf: "center" }}
              subtitleStyle={{ alignSelf: "flex-end", marginRight: 20 }}
              title={item.name}
              subtitle={item.artist}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,

    backgroundColor: "#fff",
  },
  cardTopic: {
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 10,
    width: 350,
    shadowColor: "#696969",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
