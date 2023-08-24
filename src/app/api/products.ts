import axios from "axios";

const url =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";


 async function Products(): Promise<ResponseProduct> {
  const response = await axios.get(url);
  console.log(response)
  return response.data;
 }

export const ApiProducts = {
 Products
}