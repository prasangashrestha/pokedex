import React from 'react'

const PokeCard = ({name, type, base_experience, imageUrl}) => {
    return(
        <div className='PokeCard'>
            <h2>{name}</h2>
            <img src= {imageUrl} alt={name}/>
            <p>Type: {type}</p>
            <p>Exp: {base_experience}</p>

        </div>
    )
        
}

export default PokeCard;