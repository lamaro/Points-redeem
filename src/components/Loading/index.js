import React from 'react'

const Loading = ({active = false}) => {
    return(  
        active && <img className="loader" src={require('../../assets/icons/loader.svg')} alt="Loader" /> 
    )
}

export default Loading
