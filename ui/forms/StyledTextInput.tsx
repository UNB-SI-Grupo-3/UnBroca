import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface StyledTextInputProps {
  title: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
}

export function StyledTextInput({
  title,
  placeholder,
  style,
  inputProps,
}: StyledTextInputProps) {
  return (
    <View style={[styles.container, style]}>
      <Text>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
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
