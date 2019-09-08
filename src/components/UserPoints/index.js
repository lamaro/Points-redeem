import React from 'react'

import { Container } from './styled'
import Loading from '../Loading'

const UserPoints = ({ points, loading }) => {
  return (
    <Container>
      <img className="coin" src={require('../../assets/icons/coin.svg')} alt="Coin" />
      { loading ? <Loading active={true}/> : <span className="points">{points}</span>} 
    </Container>
  )
}

export default UserPoints
