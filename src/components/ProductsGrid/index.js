import React, { useEffect } from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { getProductsThunk } from '../../store'
import Product from '../../components/Product'


const ProductsGrid = ({ products, onGetProducts }) => {
    useEffect(() => {
        onGetProducts()
    }, [onGetProducts])

    const allProducts = products.map(product => {
        return(
        <Product key={product._id} {...product}/>
        )
    })

    return(
        <Container>
            {allProducts}
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    onGetProducts: () => dispatch(getProductsThunk()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ProductsGrid)