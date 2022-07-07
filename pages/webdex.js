import React,{useEffect, useState} from 'react'
import Head from '../components/head'

import FlexDiv from '../patterns/flex-div'



import Pokecard from '../pokecard/pokecard'
import styled from  'styled-components'

import Footer from '../components/footer/footer'


const Button = styled.button`
    background-color:#292929;
    border:none;
    font-size:16px;
    width:auto;
    padding:10px;
    margin:10px 0;
    color:#fff;

    &:hover{
        letter-spacing:1px;
        transition: .2s ease-in-out;
    }

`
const Input = styled.input`
    border:none;
    border:4px solid #292929;
    padding:10px;
    margin:10px 0;
    color:#292929;
    text-align:left;
    height:auto;

    &:focus{
       letter-spacing:1px;
    }
    figcaption{
        margin:10px 0;
    }
    @media(max-width:576px){
        width:100%;
        margin:10px;
    }
`

export default function HomeContent() {

    const [pokemons, setPokemons] = useState([])

    let initialPokemon = "1"
    let baseUrl = "https://pokeapi.co/api/v2/pokemon/"

    //get the api's data
    async function getData(){

        let inputData = document.querySelector(".pokemon-name").value
     
        let pokemonName = inputData.toLowerCase().replace(" ","-")

        pokemonName == "" ? pokemonName = initialPokemon : pokemonName 

        let completeUrl = baseUrl + pokemonName
        try {
            const response = await fetch(completeUrl)
            const data = await response.json()
            setPokemons([data])
        } catch (error) {
            console.error(error)
            alert("incorrect value")
        }
    }


    async function getRandomPokemon(){

    let pokemonNumber = (Math.random() * 894).toFixed(0)
        let completeUrl = baseUrl + pokemonNumber
        try {
            const response = await fetch(completeUrl)
            const data = await response.json()
            setPokemons([data])
        } catch (error) {
            console.error(error)
            alert("Error, wait a second...")
        }
    }

    useEffect(() =>{
        getData()
        // execute with "enter" key
        let input = document.querySelector("input.pokemon-name")
        input.addEventListener("keydown",(event) =>{
            if(event.key === "Enter"){
                getData()
            }
        })

        //execute random pokemon function

        const button = document.querySelector(".button")
        button.addEventListener("click",() =>{
            getRandomPokemon()
        })
        
    },[])
    return (
        <div>
           <header>
                <Head title="Search Pokemon"/>
           </header>
             <main>
                <FlexDiv margin="20px" padding="20px" direction="column" justify="center" align="center">
                    <span>Name or number of pokemon</span>
                    <Input placeholder='ex: pikachu or 25' className='pokemon-name'/>
                    <Button onClick={getData} type="button" className='button'>Randon Pokémon</Button>
                    {
                    pokemons.map(pokemon => 
                    <Pokecard pokemon={pokemon} key={pokemon.name}/>
                    )
                    }
                </FlexDiv>
                <Footer/>
             </main>
        </div>
)}
