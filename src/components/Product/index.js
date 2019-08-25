import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { redeemProductThunk } from '../../store'


const Product = ({ name, img, category, onRedeemProduct, _id, cost }) => {
    const handleRedeemProduct = productId => onRedeemProduct(productId)
    return(
        <Container onClick={() => handleRedeemProduct(_id)}>
        <img src={img.url} alt={name} />
        <div className="product-info">
            <p>{category}</p>
            <h4>{name} - ${cost}</h4>
        </div>
        </Container>
    )
}

const mapDispatchToProps = dispatch =>({
    onRedeemProduct: productId => dispatch(redeemProductThunk(productId))
})


export default connect(null,mapDispatchToProps)(Product)