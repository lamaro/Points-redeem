import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';


const Product = ({ name, img, category, _id, cost, user }) => {
    return(
        <Container>
        <img src={img.url} alt={name} />
        <div className="price">Cost: {cost}</div>
        <div className="product-info">
            <p>{category}</p>
            <h4>{name}</h4>
        </div>
        <div className="over-info">
            <h4>{name}</h4>
            <h4>{user ? user.points : 0}</h4>
            <h5>Cost: {cost}</h5>
            {user && user.points > cost ? <Link to={`/product/${_id}`}>Redeem Now!</Link> : 'NO WAY'}
        </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user
  })

export default connect(mapStateToProps,null)(Product)