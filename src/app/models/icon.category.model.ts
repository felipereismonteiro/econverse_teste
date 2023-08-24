import { StaticImageData } from "next/image"

export type CategoryModel = {
 image: StaticImageData,
 name: string,
 color: string;
}[]