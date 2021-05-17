import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Card, Title } from "react-native-paper";

export default function HitstoricalContext({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Card
          style={styles.cardTopic}
          onPress={() => navigation.navigate("Conteúdo")}
        >
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/Medusa.jpg")}
          />
          <Card.Title titleStyle={{ alignSelf: "center" }} title="Introdução" />
        </Card>
        <Card style={styles.cardTopic}>
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/PassosDaPaixao.jpg")}
          />
          <Card.Title
            titleStyle={{ alignSelf: "center" }}
            title="Contexto histórico"
          />
        </Card>
        <Card style={styles.cardTopic}>
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/ACoroacaoDaVirgem.jpg")}
          />
          <Card.Title
            titleStyle={{ alignSelf: "center" }}
            title="Características"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardTopic: {
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
