import React from 'react'
import Div from '../patterns/div'
import styled from 'styled-components'

import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'

const PokeCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:800px;
    height:auto;
    padding:40px;
    background-color:#FFF;
    border: 4px solid #F3F4F5;
    color:#081820;

    h2{
        text-align:left;
        margin:20px 0;
    }
    figcaption{
        margin:10px 0;
        padding:10px 5px;
        font-size:18px;
    }
    img{
        width:auto;
        height:260px;
        transform:scale(1.2);
        margin:10px;
        padding:10px;
    }
    ul{
        margin:0;
        padding:0;
        text-align:left;
    }
    li{
        margin:0 20px;
    }
`

export default function pokecard({pokemon}) {
    return (
        <>
                <PokeCard>
                     <h2>{pokemon.name}</h2>
                    <ul>
                        <li>Number: {pokemon.id}</li>
                        <li>Height: {pokemon.height}</li>
                        <li>Weight: {pokemon.weight / 10}</li>
                    </ul>
                    <FlexDiv direction="column">
                    
                    <figure>
                        <figcaption>Front</figcaption>
                        <Img src={pokemon.sprites.front_default} alt="front"/> 
                        <Img src={pokemon.sprites.front_shiny} alt="front shiny"/>
                    </figure>
                    <figure>
                        <figcaption>Back</figcaption>
                        <Img src={pokemon.sprites.back_default} alt="back"/>
                        <Img src={pokemon.sprites.back_shiny} alt="back shiny"/>
                    </figure>
                    </FlexDiv>
                    <Div>
                        <h2>Type:</h2>
                        <ul>
                            {pokemon.types.map(type =>
                            <li key={type.type.name}>{type.type.name}</li>)}
                        </ul>

                        <h2>Abilities:</h2>
                        <ul>
                            {pokemon.abilities.map(ability => 
                            <li key={ability.ability.name}>
                                {ability.ability.name}
                            </li>)}
                        </ul>
                    </Div>
                </PokeCard>
             </>
    )
}
