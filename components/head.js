/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'

export default function head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="victor kiss, ssik824, sk824, pokemon, pokeapi, next.js, pokedex, styled-components, github, webdex ssik824, "/>

                    <meta name="author" content="victor kiss (ssik824)"/>

                    <meta name="description" content="Welcome to Webdex, your virtual pokedex!"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="en"/>

                    <meta name="robots" content="index, follow"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>

                    <link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"/>
                    <meta name="google-site-verification" content="VhQSA-WAgNF6QY7IUMhGqwGRrRVmaGFvypFs0QZHGrM" />
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R1H5EVV2B3"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
