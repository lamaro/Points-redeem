import React,{ useEffect } from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { getUserThunk } from '../../store'
import UserPoints from '../UserPoints'

const Navbar = ({user, onGetUser}) => {
    useEffect(() => {
        onGetUser()
      }, [onGetUser])
    return(
        <Container>
            <a href="/">
            <img src={require('../../assets/aerolab-logo.svg')} alt="Aerolab" />
            </a>
            {user && (
                <div className="user-info">
                <h3>{user.name}</h3>
                <UserPoints points={user.points} />
              </div>
            )}
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user,
  })

const mapDispatchToProps = dispatch => ({
    onGetUser: () => dispatch(getUserThunk())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)