import React, { useEffect } from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { getProductsThunk } from '../../store'
import Product from '../../components/Product'
import Skeleton from 'react-loading-skeleton';


const ProductsGrid = ({ products,loading, onGetProducts }) => {
    useEffect(() => {
        onGetProducts()
    }, [onGetProducts])

    const allProducts = products.map(product => {
        return(
        <Product key={product._id} {...product}/>
        )
    })

    const sketons = Array.from({ length: 16 }, () => {
    return(
        <div key={Math.random(1000)}>
            <Skeleton height={180}/>
            <Skeleton height={30} count={2}/>
        </div>
    )})

    return(
        <Container>
            {!loading ? 
                allProducts 
            :
                sketons
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    onGetProducts: () => dispatch(getProductsThunk()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ProductsGrid)