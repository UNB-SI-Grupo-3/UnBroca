import { backendUrl } from "../../constants";

export async function getProduct(id: string) {
  try {
    const response = await fetch(`${backendUrl}/product?id=${id}`);

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function test() {
  const result = await getProduct("1");
  console.log(result);
}
