import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { redeemProductThunk } from '../../store'

const ProductRedeem = ({productId, onRedeemProduct}) => {

    //Obtengo los productos guardados en LocalStorage
    const productsLocalStorage = JSON.parse(localStorage.getItem('productsObj'));
    const product = productsLocalStorage.find(product => product._id === productId)

    const handleRedeemProduct = productId => onRedeemProduct(productId)
    return(
        <Container>
            <div className="image">
                <img src={product.img.url} alt="" />
            </div>
            <div className="product-info">
            {product.name}
            <button onClick={() => handleRedeemProduct(productId)}>Redeem Now!</button>
            </div> 
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user
  })

const mapDispatchToProps = dispatch =>({
    onRedeemProduct: productId => dispatch(redeemProductThunk(productId))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductRedeem)