import Product from "../models/product";
import { backendUrl } from "../../constants";

export async function addproduct(product: Product) {
  try {
    const response = await fetch(`${backendUrl}/addproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const json = JSON.stringify(response);

    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function test() {
  const result = await addproduct({
    _id: "649ba76f3002531d4bf6f27g",
    address: "UnB",
    creator: "649ba8b33002531d4bf6f26e",
    details: "Frango Teste com ketchup. Acompanha arroz, salada e vinagrete",
    distance: "80",
    imageSrc: "",
    name: "Frango TESTE",
    price: "12.00",
    quantity: "10",
    stars: "5",
    telephone: "61 91234-4567",
  });
  console.log(result);
}
