/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'

export default function head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="victor kiss, ssik824, sk824, pokemon, pokeapi, next.js, pokedex, styled-components,"/>

                    <meta name="author" content="victor kiss (ssik824)"/>

                    <meta name="description" content="Welcome to Webdex, your virtual pokedex!"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="en"/>

                    <meta name="robots" content="index, follow"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>

                    <link rel="icon" type="image/x-icon" href="/pokebola.svg"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
