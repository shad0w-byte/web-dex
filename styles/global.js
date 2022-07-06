import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        overflow-x:hidden;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
       
    }
    h1.title{
        color:#292929;
       font-weight:bolder;
        text-align:center;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:bolder;
        color:#292929;
        font-weight:900;
        text-align:left;
    }
    a{
        text-decoration:none;
        margin:20px 0;
    }
    p{
        text-align:left;
        margin:10px 0;
        font-size:22px;
        letter-spacing:1px ;
    }
    span{
        text-align:left;
        font-size:20px;
    }
   @media(max-width:576px){
       div.home{
           padding:10px;
           width:100%;
           height:auto;
       }
   }
`
export default GlobalStyle