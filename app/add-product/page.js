
import { addProduct } from "./action"

export default function AddProduct() {
  return (
    <div>
      <h1>Add Product</h1>

      <form action={addProduct}>
        <input type="text" name="productName" placeholder="Product Name" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="category" placeholder="Category" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}