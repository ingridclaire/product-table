import React from 'react'

const ProductRow = ({product, handleDelete}) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>{product.qty}</td>
      <td>
        <img style={{width: '50px'}} src={product.image} alt={product.title} />
      </td>
      <td style={{color: 'red', cursor: 'pointer'}} onClick={() => handleDelete(product.title)}>DELETE</td>
    </tr>
  )
}

export default ProductRow
