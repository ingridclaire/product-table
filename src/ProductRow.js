import React from 'react'

const ProductRow = ({product, handleDelete, handleShow }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>{product.qty}</td>
      <td>
        <img style={{width: '50px'}} src={product.image} alt={product.title} />
      </td>
      <td style={{color: 'red', cursor: 'pointer'}} >
        <span onClick={() => handleShow(product)} style={{marginRight: '10px'}} ><i className="fas fa-edit"></i></span>
        <span onClick={() => handleDelete(product.title)}><i className="fas fa-trash-alt"></i></span>
      </td>
    </tr>
  )
}

export default ProductRow
