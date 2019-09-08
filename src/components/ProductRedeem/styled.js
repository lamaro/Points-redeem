import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    width:600px;
    min-height:300px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.1);
    padding:40px;
    margin: 50px auto;
    img{
        width:252px;
    }
    h4{margin-bottom:10px;
        span{
            font-style: italic;
            font-weight: 300;
        }
    }
    .price{
        display:flex;
        align-content:center;
        img{
            width:30px;
        }
        h4{font-size:40px;}
    }
    .price-left{
        display:flex;
        align-content:center;
        margin-top:10px;
        img{
            width:20px;
            padding-bottom:7px;
        }
    }
    .product-info{margin-left:20px;}
    .loader{width:50px;}
    .buttonContainer{
        display:flex;
        align-items:center;
        button{margin-right:10px;}
        height:50px;
    }
`

export { Container }
