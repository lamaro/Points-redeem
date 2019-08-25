import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container } from './styled'
import { filterProductsThunk } from '../../store'
import Button from '../Button'

const filters = [{ text: 'Most recent' }, { text: 'Lowest price' }, { text: 'Highest price' }]

const Filters = ({products, onGetProductsFiltered}) => {
  const [activeButton, setActiveButton] = useState(filters[0].text)

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName)
    let productsFiltered = []
    switch (buttonName) {
      case 'Most recent':
          productsFiltered = products
        break;
      case 'Lowest price':
          productsFiltered = products.sort((a, b) => (a.cost > b.cost) ? 1 : -1).slice()
        break;
      case 'Highest price':
          productsFiltered = products.sort((a, b) => (a.cost < b.cost) ? 1 : -1).slice()
        break;
        
      default:
          productsFiltered = products
        break;
    }
    
    onGetProductsFiltered(productsFiltered)
  }

  return (
    <Container>
      <div>
        <div className="sort-by">
          <span>Sort by:</span>
          {filters.map(filter => (
            <Button
              key={filter.text}
              active={activeButton === filter.text}
              onClick={() => handleButtonClick(filter.text)}
            >
              {filter.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="total-products">16 of 32 products</div>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

 const mapDispatchToProps = dispatch => ({
   onGetProductsFiltered: products => dispatch(filterProductsThunk(products)),
 })

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Filters)
