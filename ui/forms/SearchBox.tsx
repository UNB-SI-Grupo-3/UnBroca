import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  inputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
}

export function SearchBox({ style, inputProps }: Props) {
  return (
    <View style={[styles.searchBar, style]}>
      <Image source={require("../../assets/lupa.png")} />
      <TextInput placeholder="Pesquisar" {...inputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    columnGap: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
});
