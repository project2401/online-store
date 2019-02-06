import React from 'react'

const ProductTitle = ({
  selectProduct
}) => {
  // console.log('selectProduct =  ',selectProduct);
  
  const title = selectProduct.map((item)=>{
    const {id, title, img, text} = item
    return(
      <nav key = {id}>
        <div>{title}</div>
        <div>{img}</div>
        <div>{text}</div>
      </nav>
    )
  })
  return (
    <div className="col">
      {title}
    </div>
  )
}
export default ProductTitle

  
    
    
  


