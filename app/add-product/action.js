
"use server"

import { readFile } from "fs";
import fs from "fs/promises"


export async function addProduct(formData) {
 const product = {
    name  : formData.get("productName"),
    price : formData.get("price"),
    category  : formData.get("category")
 }

 const data = await fs.readFile("products.json", "utf-8");
  // 3. String ko JavaScript array mein convert karna
  const products = JSON.parse(data)
 

  products.push(product);
  console.log(product);
  console.log(products);

   await fs.writeFile(
    "products.json",
    JSON.stringify(products, null, 2)
  )


}

