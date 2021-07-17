import { getByTitle } from '@testing-library/react';
import React from 'react'
import { Form, Button } from 'react-bootstrap';


const ProductForm = ({
  title, 
  setTitle, 
  description, 
  setDescription, 
  price, 
  setPrice, 
  quantity,
  setQuantity,
  image,
  setImage,
  handleAddProduct,
  handleEditProduct,
  type 
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Product Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter a title for the product"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter a description for the product"
         value={description}
         name="description"
         onChange={(e) => setDescription(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter a image for the product"
         value={image}
         name="image"
         onChange={(e) => setImage(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter a quantity for the product"
         value={quantity}
         name="quantity"
         onChange={(e) => setQuantity(e.target.value)}  
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter a price for the product"
         value={price}
         name="price"
         onChange={(e) => setPrice(e.target.value)} 
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={type=== 'add' 
        ? (e) => handleAddProduct(e, { title, description, image, quantity, price}) 
        : (e) => handleEditProduct(e)}
      >
        {type === 'add' ? 'Submit Product' : 'Submit Changes'}
      </Button>
    </Form>
  )
}

export default ProductForm
