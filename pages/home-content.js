import React,{useEffect} from 'react'
import Head from '../components/head'
import Link from 'next/link'

import styled from 'styled-components'
import FlexDiv from '../patterns/flex-div'
import Div from '../patterns/div'
import Img from '../patterns/img'

import {typeText} from '../functions/typeText'

const Button = styled.button`
    background-color:#10314a;
    padding:10px;
    margin:10px;
    border:none;
    width:100%;
    height:auto;
    border-radius:10px;
    color:#ff5a6a;

    a{
        text-decoration:none;
        font-weight:700;
        font-size:22px;
    }
`



export default function HomeContent() {
    useEffect(() =>{
        const title = document.querySelector("h1.title")
        typeText(title)
    },[])
    return (
        <div>
           <header>
                <Head title="Webdex by ssik824"/>
           </header>
             <main>
                 <FlexDiv width="100vw" height="100vh" direction="column" align="center" className="home"> 
                <Div width="500px" margin="10px" padding="10px">
                <Img src="/mr-mime.gif" alt="mew gif" margin="10px 0 " padding="10px  0"/>
                    <h1 className='title'>Welcome to webdex !</h1>
                   
                        <Link href="/webdex">
                        <Button><a>Next</a> </Button>
                        </Link>
                </Div>
                </FlexDiv>
             </main>
        </div>
    )
}
