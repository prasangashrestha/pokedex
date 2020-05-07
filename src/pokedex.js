import React, { Component } from 'react'
import PokeCard from './pokeCard'

export default class Pokedex extends Component {
    state = {
        pokeData : [ 
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png'},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png'},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png'},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png'}
          ]
    }

    render() {
        
        const pokeCard = this.state.pokeData.map(({id, ...otherProps}) => {
            return <PokeCard key={id} {...otherProps} />
        })
        return (
            <div className='Pokedex'>
                {pokeCard}
            </div>
        )
    }
}
