import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { redeemProductThunk } from '../../store'
import Button from '../Button'
import Loading from '../Loading'

const ProductRedeem = (props) => {
    const {productId, user,loading, onRedeemProduct} = props
    //if(user) user.points = 200 //only to test user low amount of points 
    //Obtengo los productos guardados en LocalStorage
    //Ubiese estado bueno que la api tenga un metodo para traer un solo producto
    const productsLocalStorage = JSON.parse(localStorage.getItem('productsObj'));
    const product = productsLocalStorage.find(product => product._id === productId)

    const handleRedeemProduct = productId => onRedeemProduct(productId)

    return(
        <Container>
            <div className="image">
                <img src={product.img.url} alt="" />
                
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <h4><span>{product.category}</span></h4>
                <div className="price">
                    {<img className="coin" src={require('../../assets/icons/coin.svg')} alt="Coin" />}<h4>{product.cost}</h4>
                </div>
                
                {user && (user.points - product.cost >= 0 ?
                    <>
                    <div className="buttonContainer">
                        <Button 
                        active={true}
                        onClick={() => handleRedeemProduct(productId)}
                        >Redeem Now!
                        </Button>
                        {<Loading active={loading}/>}
                    </div>
                    
                    <div className="price-left">
                        <img className="coin" src={require('../../assets/icons/coin.svg')} alt="Coin" />
                        <h4><span>{user.points - product.cost} after redeem</span></h4>
                    </div>
                    </>
                    :
                    <h4>You need more points for redeem, sory</h4>
                )}

            </div> 
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    loading:state.loading
  })

const mapDispatchToProps = dispatch =>({
    onRedeemProduct: productId => dispatch(redeemProductThunk(productId))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductRedeem)