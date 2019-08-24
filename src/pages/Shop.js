import React from 'react'
import { Container } from './styled'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductsGrid from '../components/ProductsGrid'
import Footer from '../components/Footer'


const Shop = () => {
    return(
        <Container>
            <Navbar />
            <Header />
            <div className="container">
                <Filters />
                <ProductsGrid />
            </div>

            <Footer />
        </Container>
    )
}

export default Shop