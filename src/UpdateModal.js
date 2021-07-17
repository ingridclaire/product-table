import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import ProductForm from './ProductForm';

const UpdateModal = ({ 
  showModal, 
  handleClose, 
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
  handleEditProduct,
  type  }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm
          type="edit"
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
        />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateModal
