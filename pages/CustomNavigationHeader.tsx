import {
  Image,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  Pressable,
} from "react-native";

interface props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  back: { title: string } | undefined;
}

export function CustomNavigationHeader({ title, onPress, back }: props) {
  return (
    <View style={styles.header}>
      {back ? (
        <Pressable
          style={{ flexDirection: "row", position: "absolute", left: 10 }}
          onPress={onPress}
        >
          <Image
            source={require("../../assets/chevron.png")}
            style={styles.chevron}
          />
          <Text>{back.title}</Text>
        </Pressable>
      ) : null}
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },

  content: {
    flex: 1,
  },

  chevron: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
