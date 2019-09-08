import React from 'react'
import { Container } from './styled'
import dayjs from "dayjs";

const ProductHistory = ({product}) => {
    const {name, img, createDate} = product
    const dateFormated = dayjs(createDate).format(' DD/MM/YYYY - HH:mm:ss A') // display
    return(
       <Container>
           <img src={img.url} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <p>{dateFormated}</p>
            </div>
       </Container>
    )

}

export default ProductHistory