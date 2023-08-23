type ResponseProduct = {
 success: boolean,
 products: Products
}

type Products = Product[]

type Product = {
 productName: string,
 descriptionShort: string,
 photo: string,
 price: number
}