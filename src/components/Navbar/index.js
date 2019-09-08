import React,{ useEffect, useState } from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { getUserThunk } from '../../store'
import UserPoints from '../UserPoints'
import ProductHistory from '../ProductHistory'
import Button from '../Button'

const Navbar = ({user,loading, onGetUser}) => {

    useEffect(() => {
        onGetUser()
      }, [onGetUser])
      const [userHistory, showUserHistory] = useState(false)
    return(
        <Container>
            <a href="/">
            <img src={require('../../assets/aerolab-logo.svg')} alt="Aerolab" />
            </a>
            {user && (
              <div>
                <div className="user-info">
                  <UserPoints points={user.points} loading={loading} />
                  <Button
                  active={true}
                  onClick={() => showUserHistory(!userHistory)}
                  >
                  {user.name}
                  </Button>
                </div>
                {userHistory && (
                  <div className="user-history">
                    {
                    user.redeemHistoryOrdered.map(product => <ProductHistory product={product} key={product.createDate}/>)
                    }
                  </div>
                )}
              </div>
            )}
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    loading:state.loading

  })

const mapDispatchToProps = dispatch => ({
    onGetUser: () => dispatch(getUserThunk()),

})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)