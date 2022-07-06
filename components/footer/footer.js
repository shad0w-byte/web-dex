import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Section from '../../patterns/section'

import Link from 'next/link'
import Img from '../../patterns/img'


export default function footer() {
    return (
        <Footer>
            <FlexDiv  justify="baseline" align="baaseline" width="100%" height="100%">
            <Section 
              margin="10px" width="20%">
                <Img src="/darkrai.gif" alt="darkrai gif" width="250px" height="250px"/>
                <Link href="/">
                    <a className="home">
                    <i className="bi bi-arrow-left"></i>
                      Back to Home
                    </a>
                </Link>
              </Section>
            <Section 
              margin="10px" width="40%">
                    <h2>About</h2>
                    <p>Webdex is my personal project, a web version of pokedéx,this site is a redesign and reprogramming of my old website with the same name.</p>
              </Section>
              <Section 
              margin="10px" width="40%">
                    <h2>Creator</h2>
                    <p>Hello World! My name is Victor Kiss but you can call me ssik! If you liked this project come explore my world!</p>

                    <a href='https://ssik824.vercel.app/' target="_blank" rel='noreferrer'>
                    <i className="bi bi-cursor-fill"></i>
                      My website
                    </a>
                    <a href='https://instagram.com/ssik824' target="_blank" rel='noreferrer'>
                    <i className="bi bi-instagram"></i>
                      My Instagram
                    </a>
              </Section>
            </FlexDiv>
        </Footer>
    )
}
