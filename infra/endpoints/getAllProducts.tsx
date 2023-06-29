export const getAllProducts = async () => {
    try {
        const response = await fetch(
            'https://sa-east-1.aws.data.mongodb-api.com/app/data-shxfr/endpoint/products',
        );

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
