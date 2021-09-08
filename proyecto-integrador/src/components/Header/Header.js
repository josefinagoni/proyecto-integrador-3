import React, {Component} from 'react';
import Buscador from '../Buscador/Buscador';

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
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <Buscador />
        </section>
        </React.Fragment>
           
        )
    }
} 

export default Header