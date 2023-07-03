import { backendUrl } from "../../constants";
import Product from "../models/product";

export async function getAllProducts() {
  const response = await fetch(`${backendUrl}/products`);
  const body = (await response.json()) as unknown;
  assertIsProducts(body)
  return body;
}

export function assertIsProducts(
  products: unknown
): asserts products is Product[] {
  if (!Array.isArray(products)) {
    throw new Error("Product is not in an array.");
  }
  if (products.length === 0) {
    return;
  }
  products.forEach((product) => {
    if (!("_id" in product)) {
      throw new Error("Product has no _id.");
    }
  })
}

export async function test() {
  const result = await getAllProducts();
  console.log(result);
}
