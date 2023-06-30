import { backendUrl } from "../../constants";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${backendUrl}/products`);

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

export async function test() {
  const result = await getAllProducts();
  console.log(result);
}
