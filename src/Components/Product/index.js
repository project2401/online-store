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
      <div key={id} className="col-2">
          <button type='text' onClick={()=>selectProduct(id, )}>{title}</button>
       </div>
        )
    });
  return (
    <div className="col d-flex">
      {product} 
    </div>
  )
}
export default Product

  
    
    
  


