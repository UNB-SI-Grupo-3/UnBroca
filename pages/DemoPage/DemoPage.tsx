import React from 'react';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BigButton, Header, StyledTextInput } from "../../ui";

export function DemoPage() {
  const [text, setText] = useState("Click me!");

  return (
    <ScrollView style={{ flex: 0.5 }}>
      <Header>Welcome to the DEMO PAGE</Header>
      <Text>
        Here we insert and show all basic elements that we might use in the
        project
      </Text>
      <Text>---</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat
        voluptatum minus sit dicta nesciunt esse enim provident quis nobis, modi
        beatae quibusdam! Provident accusantium, placeat quo magnam blanditiis
        nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        quaerat voluptatum minus sit dicta nesciunt esse enim provident quis
        nobis, modi beatae quibusdam! Provident accusantium, placeat quo magnam
        blanditiis nihil.
      </Text>
      <View style={{ flexDirection: "row" }}>
        <StyledTextInput
          style={{ flex: 0.33 }}
          title="Form input 1"
          placeholder="Hey, it's me"
        />
        <StyledTextInput
          style={{ flex: 0.33 }}
          title="Form input 2"
          placeholder="Placeholder"
        />
        <StyledTextInput
          style={{ flex: 0.33 }}
          title="Form input 3"
          placeholder="Can you see me here by the side?"
        />
      </View>
      <StyledTextInput
        title="Form input 4 (This one works)"
        placeholder="Set the button name below"
        inputProps={{ onChangeText: setText }}
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton style={{ flex: 1 }} text={text} />
        <BigButton style={{ flex: 1 }} text="Disabled" disabled={true} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignContent: "stretch",
  },
});
