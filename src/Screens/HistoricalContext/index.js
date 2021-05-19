import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-paper";

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
          onPress={() =>
            navigation.navigate("Conteúdo", {
              content: {
                title: "Introdução",
                contents:
                  "A arte barroca foi uma corrente que teve como berço de origem a Itália. Surgido no fim do século XVI, esse movimento artístico foi difundido para outros países da Europa e logo chegou à América Latina.\n\nMarcada pela exuberância, a proposta e a estética da arte barroca se assemelham às do renascimento, visto que as duas correntes promoviam a beleza e exaltavam elementos da antiguidade. \nNo entanto, enquanto a primeira (renascimento) enfatizava o equilíbrio entre a emoção e a razão, promovendo um formato consciente de arte;\n a segunda (barroco) ressaltava o dinamismo, a emoção e a dramaticidade.\n\nO estilo barroco não dominou só a arte, também influenciou a arquitetura, o design de interiores, a música e a literatura.",
              },
            })
          }
        >
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/WorksOfArt/Medusa.jpg")}
          />
          <Card.Title titleStyle={{ alignSelf: "center" }} title="Introdução" />
        </Card>
        <Card
          style={styles.cardTopic}
          onPress={() =>
            navigation.navigate("Conteúdo", {
              content: {
                title: "Contexto Hitórico",
                contents:
                  "O contexto histórico do barroco está totalmente associado ao catolicismo. Afinal, a Igreja Católica se sentia ameaçada pela Reforma Protestante de Martinho Lutero e perdia seu poder e domínio no século XVI. Porém, o clero ainda influenciava a economia, a política e a esfera religiosa dessa época. Logo, a arte barroca surgiu como uma resposta da Igreja Católica para não perder sua hegemonia.\n\nAssim, para diminuir o poder do protestantismo da renascença, que apresentava um caráter mais racional e que prestigiava a ciência, o barroco na arte teve seu início. Dessa forma, com o intuito de propagar a fé católica e reafirmar os valores cristãos, esse movimento estimulou a dramaticidade em suas obras para impactar seus espectadores.",
              },
            })
          }
        >
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/WorksOfArt/PassosDaPaixao.jpg")}
          />
          <Card.Title
            titleStyle={{ alignSelf: "center" }}
            title="Contexto histórico"
          />
        </Card>
        <Card
          style={styles.cardTopic}
          onPress={() =>
            navigation.navigate("Conteúdo", {
              content: {
                title: "Características",
                contents:
                  "O barroco apresenta características heterogêneas. Afinal, esse estilo foi disseminado em lugares diferentes do mundo. Sendo assim, sua produção reflete aspectos de cada localidade. No entanto, o barroco conta com algumas características marcantes. São elas:",
                list: [
                  "\n• A tentativa de comover e impressionar o observador\n",
                  "• O prestígio dos elementos religiosos\n",
                  "• A exuberância e a dramaticidade\n",
                  "• Jogos de luz que apresentam fortes contrastes entre luz e sombra\n",
                  "• Pinturas que promoviam efeitos ilusionistas\n",
                  "• A riqueza de detalhes\n",
                  "• O exagero decorativo\n",
                  "• A prevalência das curvas em detrimentos de elementos geométricos\n",
                  "• Uma iconografia dramática e óbvia\n",
                  "• Linguagem refinada\n",
                  "• Pessimismo\n",
                ],
              },
            })
          }
        >
          <Card.Cover
            resizeMode="cover"
            source={require("../../../assets/Images/Thumbs/WorksOfArt/ACoroacaoDaVirgem.jpg")}
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
    paddingTop: 25,
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
