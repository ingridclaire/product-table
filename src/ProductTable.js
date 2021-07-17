// import React, { useState } from 'react'
// import ProductRow from './ProductRow'
// import data from './data';
// import ProductForm from './ProductForm';

// const ProductTable = () => {
//   const [state, setState] = useState({
//     title: '',
//     description: '',
//     image: '',
//     quantity: '',
//     price: ''
//   })
//   const [updateClicked, setUpdateClicked] = useState(false);
//   const [products, setProducts] = useState(data);
//   const [oldTitle, setOldTitle] = useState('');

//   const handleChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleAddProduct = (e, productData) => {
//     e.preventDefault();
//     if (!updateClicked) {
//       const updatedProducts = [...products, productData]
//       setProducts(updatedProducts);
//     } else {
//       const updatedProducts = [...products]
//       updatedProducts.forEach(product => {
//         if (product.title === oldTitle) {
//           setTitle(product.title)
//           setOldTitle(product.title);
//           setDescription(product.description)
//           setPrice(product.price);
//           setQty(product.qty);
//           setImage(product.image);
//         }
//       })
//       setProducts(updatedProducts);
//     }
//   }

//   const handleDelete = () => {
//     const updatedProducts = products.filter(product => product.title !== title)
//     setProducts(updatedProducts);
//   }

//   const setUpdateDetails = (product) => {
//     setUpdateClicked(true);
//     setTitle(product.title)
//     setOldTitle(product.title);
//     setDescription(product.description)
//     setPrice(product.price);
//     setQty(product.qty);
//     setImage(product.image);
//   }

//   return (
//     <div className="table-container">
//       <h1>Our Products</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Image</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(item => (
//             <ProductRow product={item} handleDelete={handleDelete} setUpdateDetails={setUpdateDetails} />
//           ))}
//         </tbody>
//       </table>
//       <form style={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: '25px' }}>
//         <h4>{!updateClicked ? 'Add a Product!' : 'Update Product'}</h4>
//         <label>Enter a Product Title </label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a product title" />
//         <label>Enter a Product Description </label>
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <label>Enter a Product Price </label>
//         <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
//         <label>Enter a Product Quantity </label>
//         <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
//         <label>Enter a Product Title </label>
//         <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
//         <button type="submit" onClick={(e) => handleAddProduct(e, { title, description, price, qty, image })}>{!updateClicked ? 'Add Product' : 'Update Product'}</button>
//       </form>
//     </div>
//   )
// }

// export default ProductTable
