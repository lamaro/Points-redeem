import styled from 'styled-components'

const Container = styled.div`
  padding: 24px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #d9d9d9;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    .sort-by {
      color: #a3a3a3;
      span {
        margin-right: 24px;
      }
    }
  }
  .total-products {
    color: #a3a3a3;
  }
`

export { Container }
