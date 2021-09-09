import React, {Component} from 'react';
import Buscador from '../Buscador/Buscador';
import './header.css'

class Header extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <React.Fragment>
            <h1>Top movies</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
        <ul className='row-header'>
           <li> <i className="fas fa-th"></i></li>
           <li><i className="fas fa-align-justify"></i></li>
           <li> <Buscador /> </li>
        </ul>
        </section>
        </React.Fragment>
           
        )
    }
} 

export default Header