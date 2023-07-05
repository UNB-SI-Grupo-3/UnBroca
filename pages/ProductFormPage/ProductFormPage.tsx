import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { BigButton, StyledTextInput } from "../../ui";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { addProduct } from "../../infra/endpoints/addProduct";


interface ProductFormPageProps {
  route: any;
  navigation: any;
}

// TODO: add more forms that written with the component below. Also add some 
// checks to the inputs.  
export function ProductFormPage({ navigation }: ProductFormPageProps) {
  const addProduto = async () => {
    console.log('Criando produto...');

    const response = await addProduct({
        _id: Math.floor(Math.random() * 10000).toString(),
        address: "UnB",
        creator: "Luis Soares",
        details: details,
        distance: "80",
        imageSrc: img,
        name: name,
        price: price,
        quantity: qnt,
        stars: "5",
        telephone: "61 91234-4567",
    });

    ToastAndroid.show('Novo produto criado com sucesso!', ToastAndroid.SHORT);
    
    navigation.goBack();
  };


  const [checked, setChecked] = React.useState("first");
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [img, setImg] = React.useState('');
  const [qnt, setQnt] = React.useState();
  const [details, setDetails] = React.useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const manipResult = await ImageManipulator.manipulateAsync(
            result.assets[0].uri,
            [],
            {base64: true}
          );
      if (manipResult.base64) {
          setImg('data:image/jpeg;base64,' + manipResult.base64);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StyledTextInput
        title="Nome"
        placeholder="Marmita"
        value={name}
        onChangeText={(text: React.SetStateAction<undefined>) => setName(text)}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <StyledTextInput
            title="Preço"
            placeholder="10,00"
            value={price}
            onChangeText={(text: React.SetStateAction<undefined>) =>
              setPrice(text)
            }
          />
          <View>
            <Text style={{ marginLeft: 5, marginTop: 10 }}>
              Aceita Reserva?
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text>Sim</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text>Não</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={pickImage}>
          {/* TODO: Fix "source uri should not be an empty string" from the line below */}
          <Image source={{ uri: img }} style={styles.circle} />
        </TouchableOpacity>
      </View>
      <StyledTextInput
        title="Quantidade"
        placeholder="10"
        style={{ marginTop: 10 }}
        value={qnt}
        onChangeText={(text: React.SetStateAction<undefined>) => setQnt(text)}
      />
      <StyledTextInput
        title="Detalhes do Anúncio"
        placeholder="Acompanha arroz, feijão..."
        value={details}
        onChangeText={(text: React.SetStateAction<undefined>) =>
          setDetails(text)
        }
      />
      <BigButton
        onPress={addProduto}
        text="Adicionar produto"
        style={{ width: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    gap: 20,
  },

  circle: {
    flex: 1,
    width: 160,
    height: 160,
    borderRadius: 160,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
  },
});
