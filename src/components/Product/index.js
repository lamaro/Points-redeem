import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Button from '../Button'


const Product = ({ name, img, category, _id, cost, user,history }) => {
    let canRedeem = false;
    if (user) canRedeem = user.points > cost

    return(
        <Container>
            <img src={img.url} alt={name} />
            <div className="price"><img className="coin" src={require('../../assets/icons/coin.svg')} alt="Coin" /> {cost}</div>
            <div className="product-info">
                <p>{category}</p>
                <h4>{name}</h4>
            </div>
            <div className="over-info">
                <h4>{name}</h4>
                <h5>Your Points: {user ? user.points : 0}</h5>
                <h5>Cost: {cost}</h5>
                {user ?
                    (canRedeem ?
                        <div>
                            <h5 className="points-difference">Difference: {user.points - cost}</h5>
                            <Button
                                key={name}
                                active={true}
                                onClick={() => history.push(`/product/${_id}`)}
                            >
                                View Product
                            </Button>
                        </div>
                    :
                        <h5>You need: {cost - user.points} extra points</h5>
                    )
                : 
                    ''
                }
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user
  })

export default withRouter(connect(mapStateToProps,null)(Product))