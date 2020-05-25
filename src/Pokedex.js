import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css'

class Pokedex extends Component {
  
     static defaultProps = {
         pokemon :[
             {id : 4 , name: 'Charmander' , type: 'fire', base_experience: 62},
             { id: 7, name: 'Squaitle' , type:'water' , base_experience:63},
             {id: 11, name: 'Metapod', type:'bug', base_experience:72},
             {id:12 , name: 'Butterfree' , type: 'flying' , base_experience:178},
             {id:25, name:'Pikachu', type:'electric',base_experience:112},
             {id:39 , name:'Jigglypuff', type:'normal',base_experience:95},
             {id:94 , name:'Gengar', type:'posion',base_experience:225},
             {id:133, name:'Eevee', type: 'normal', base_experience:65}
         ]
     }

    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className='Pokedex-winner'>Wining Hand</h1>;
        
        }
        else {
            title = <h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        return(
            <div>

                <h2>Pokedex</h2>
                <hr></hr>
            <div className='container text-center'>
            <div class ='poke2'>
                <p>Total experience : {this.props.exp} </p>
                {title}
                <p className={this.props.isWinner ? 'Pokdex-winner':'Pokedex-loser'}> 
                    {this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p>
            </div>
            </div>
            
               
                <div className='Pokedex-cards'>
                
                {this.props.pokemon.map((p) =>(
                    <PokeCard id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}/>
                    ))}
                </div>
               
           

            </div>
        )
    }
}


export default Pokedex;