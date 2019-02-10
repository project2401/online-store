import React from 'react'

const Product = ({
  prod,
  selectProduct
}) => {
  const product = 
  prod.map((item)=>{
    const { id, title } = item
    return(
      <div key={id} >
          <button type='text' onClick={()=>selectProduct(id)}>{title}</button>
       </div>
        )
    });
  return (
    <div className = "product">
      {product} 
    </div>
  )
}
export default Product

  
    
    
  


