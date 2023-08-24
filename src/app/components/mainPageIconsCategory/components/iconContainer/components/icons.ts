import { CategoryModel } from "@/app/models/icon.category.model";
import supermercado from "@/../public/supermercados 1.png";
import bebidas from "@/../public/whiskey.png";
import ferramentas from "@/../public/ferramentas 1.png";
import saude from "@/../public/cuidados-de-saude 1.png";
import esportes from "@/../public/corrida 1.png";
import moda from "@/../public/moda 1.png";
import monitortablet from "@/../public/monitorar-tablet-e-smartohone 1.png";

export const Icons: CategoryModel = [
 {
  image: monitortablet,
  name: "Tecnologia",
  color: "red"
 },
 {
  image: supermercado,
  name: "Supermercado",
  color: "gray"
 },
 {
  image: bebidas,
  name: "Bebidas",
  color: "gray"
 },
 {
  image: ferramentas,
  name: "Ferramentas",
  color: "gray"
 },
 {
  image: saude,
  name: "Saúde",
  color: "gray"
 },
 {
  image: esportes,
  name: "Esportes e Fitness",
  color: "gray"
 },
 {
  image: moda,
  name: "Moda",
  color: "gray"
 },

]