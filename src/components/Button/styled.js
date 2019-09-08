import styled from 'styled-components'

const Container = styled.button`
  all: unset;
  border-radius: 3px;
  padding: 8px 24px;
  cursor: pointer;

  color: ${props => (props.active ? '#FFFFFF' : '#FFFFFF')};
  background-color: ${props => (props.active ? '#EF476F' : '#F69AB0')};
  :hover {
    opacity: .8;
  }
  ~ button {
    margin-left: 12px;
  }
  
`

export { Container }
