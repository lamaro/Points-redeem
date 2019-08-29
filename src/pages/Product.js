import React from 'react'
import { Container } from './styled'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductRedeem from '../components/ProductRedeem'


const Product = props => {
    const productId = props.match.params.id;
    return(
        <Container>
            <Navbar />
            <Header />
            <div className="container">
                <ProductRedeem productId={productId} />
            </div>
            <Footer />
        </Container>
    )
}

export default Product