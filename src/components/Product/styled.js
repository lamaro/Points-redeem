import styled from 'styled-components'

const Container = styled.div`
  width: 276px;
  height: 276px;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 12px 24px;
  transition: all 400ms ease-in-out;
  position:relative;

  img {
    height: 180px;
    max-width: 250px;
    border-bottom: 1px solid #d9d9d9;
  }

  .product-info {
    padding-top: 20px;
  }
  .price {
    position:absolute;
    top:30px;
    right:0;
    padding:5px 15px 5px 5px;
    background-color: rgba(38,84,124,0.8);
    color: #fff;
    display:flex;
    align-items: center;
    img {width: 24px;
      height: 24px;
      border-bottom:none;
    }
  }

  .over-info{
    display:none;
    position: absolute;
    top: 0;
    background-color: rgba(38,84,124,0.8);
    width: 100%;
    left: 0;
    height: 100%;
    color:#fff;
    text-align:center;
    padding:30px;
  }

  .over-info h4{font-size:20px;margin-bottom:20px;height:40px;}
  .over-info h5{font-size:15px;margin-bottom:5px}
  .over-info .points-difference{margin-bottom:30px}

  }

  :hover {
    color: #ffffff;
    
    transform: scale(1.05);
    background-color: #26547C;

    img {
      mix-blend-mode: multiply;
    }
    .over-info{
      display:block;
    }
    .price, .product-info{display:none;}
  }
`

export { Container }
