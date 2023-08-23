import axios from "axios";

const url =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";


 async function Products(): Promise<ResponseProduct> {
  return (await axios.get(url)).data;
 }

export const ApiProducts = {
 Products
}