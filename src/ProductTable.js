import React, {useState} from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products, handleAddProduct, handleDelete }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0);
  const [image, setImage] = useState('');

  return (
    <div>
      
      <form style={{display:'flex', flexDirection:'column', width: '60%'}}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a product title" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit" onClick={(e) => handleAddProduct(e, {title, description, price, qty, image})}>Add a Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <ProductRow product={item} handleDelete={handleDelete}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
