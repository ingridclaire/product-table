import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import ProductRow from './ProductRow';
import data from './data';
import ProductForm from './ProductForm';
import UpdateModal from './UpdateModal';

const NewTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [quantity, setQuantity] = useState('')
  const [products, setProducts] = useState(data);
  const [sortedProducts, setSortedProducts] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [oldTitle, setOldTitle] = useState('');

  const handleClose = () => setShowModal(false);
  const handleShow = (product) => {
    setTitle(product.title)
    setDescription(product.description)
    setImage(product.image)
    setPrice(product.price)
    setQuantity(product.quantity)
    setOldTitle(product.title);
    setShowModal(true)
  };

  const sortTable = () => {
    const sorted = [...products];
    sorted.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      
      return 0;
    })
    setSortedProducts(sorted);
  }

  const handleAddProduct = (e, productData) => {
    e.preventDefault();
    const updatedProducts = [...products, productData]
    setProducts(updatedProducts);
    setShowForm(false);
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setQuantity('')
  }

  const handleEditProduct = (e) => {
    e.preventDefault();
    const copy = [...sortedProducts];
    const updated = copy.map((product, i) => {
      if (product.title === oldTitle) {
        const newProduct = {
          title,
          description,
          image,
          quantity,
          price
        }
        return newProduct;
      }
      return product;
    })
    setSortedProducts(updated);
    setTitle('')
    setDescription('')
    setImage('')
    setPrice('')
    setQuantity('')
    handleClose();
  }

  const handleDelete = (productTitle) => {
    const updatedProducts = sortedProducts.filter(product => product.title !== productTitle)
    setSortedProducts(updatedProducts);
  }
  return (
    <div className="w-75">

      <Table striped bordered hover >
        <thead>
          <tr>
            <th onClick={sortTable} style={{cursor: 'pointer'}}>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(item => (
            <ProductRow key={item.title} product={item} handleDelete={handleDelete} handleShow={handleShow}/>
          ))}
        </tbody>
      </Table>
      <button onClick={() => setShowForm(true)}>Add Product</button>
      {showForm && <ProductForm 
        title={title} 
        setTitle={setTitle} 
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice}
        image={image}
        setImage={setImage}
        handleAddProduct={handleAddProduct} 
        type="add"
      />}
      <UpdateModal 
        title={title} 
        setTitle={setTitle} 
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice}
        image={image}
        setImage={setImage}
        handleEditProduct={handleEditProduct} 
        type="edit"
        showModal={showModal}
        handleClose={handleClose}
      />
    </div>
  )
}

export default NewTable
