import React from 'react'

const Product = ({
  prod,
  selectProduct
}) => {
  // console.log('prod = ', prod)
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
    <div>
      {product} 
    </div>
      
    
  )
}
export default Product

  
    
    
  


