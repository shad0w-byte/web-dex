import styled from 'styled-components'


const Footer = styled.footer`
    height:100%;
    width:100%;
    display:block;
    background-color:#151515;
    color:#fff;
    font-weight: bold;
    
    // footer para diferentes dispositivos
    @media(max-width:576px){
        position:${props => props.positionMobile || "relative"};
        text-align:left;
        margin-top: 20px;
        padding-top: 10px;
    }
    @media(max-width:768px){
        margin-top: 30px;
    
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
        text-align:left;
    }
    h2{
        color:#108bac;
        margin:20px 0;
    }
    p{
        font-size:16px;
        padding:10px 0;
    }
  a{
    text-decoration:none;
    color:#e63929;
    padding:10px 0 ;
    display:block ;
  }
  a.home{
    text-decoration:none;
    color:#e63929;
    cursor:pointer;
    padding:10px;
    display:block ;
    letter-spacing:1px;
  }
  i.bi{
    vertical-align:bottom;
    font-size:20px;
    margin-right:5px;
  }
`
export {Footer}