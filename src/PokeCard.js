import React, { Component } from 'react';
import './PokeCard.css';
import 'bootstrap/dist/css/bootstrap.css';


// const POKE_API = 
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number); 
class Pokecard extends Component{

    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
        <div className='PokeCard'>
           <h3> {this.props.name}</h3> 
           <img src={imgSrc} alt={this.props.name}/>
            
           <div> 
           <h5> Type : {this.props.type} </h5><br></br>
           <h5>  Exp: {this.props.exp}  </h5>
           </div>
        </div>
        );
    }


}

export default Pokecard