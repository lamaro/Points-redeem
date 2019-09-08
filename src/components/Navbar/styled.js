import styled from 'styled-components'

const Container = styled.nav`
  position:fixed;
  width:100%
  z-index:1000;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 42px;
  background-color: #26547C;

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .user-history{
    position: absolute;
    z-index: 1;
    top: 80px;
    right: 40px;
    width: 320px;
    height: 230px;
    border-radius: 0 0 10px 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
   
    border-top:none;
    overflow-y: scroll;
    background: #fff;

  }
`

export { Container }