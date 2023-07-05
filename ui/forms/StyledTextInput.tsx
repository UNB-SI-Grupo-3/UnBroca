import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  TextStyle
} from "react-native";

interface StyledTextInputProps {
  title: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inputProps?: TextInputProps;
  value?: string;
  onChangeText?: any;
}

export function StyledTextInput({
  title,
  placeholder,
  style,
  inputProps,
  value,
  onChangeText,
  textStyle
}: StyledTextInputProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={textStyle}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...inputProps}
      />
      <View style={styles.hr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },

  textInput: {},

  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
