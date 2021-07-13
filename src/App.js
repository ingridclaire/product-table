import './App.css';
import data from './data';
import ProductTable from './ProductTable'
import React, {useState} from 'react';

function App() {
  const [products, setProducts] = useState(data);

  const handleAddProduct = (e, productData) => {
    e.preventDefault();
    const updatedProducts = [...products, productData]
    setProducts(updatedProducts);
  }

  const handleDelete = (title) => {
    const updatedProducts = products.filter(product => product.title !== title)
    setProducts(updatedProducts);
  }

  return (
    <div className="App">
     <ProductTable products={products} handleAddProduct={handleAddProduct} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
