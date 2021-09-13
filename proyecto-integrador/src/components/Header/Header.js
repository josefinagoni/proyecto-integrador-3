import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(){
        super();
        this.state={
            filterBy:''

        }
    }

    evitarSubmit(e){
        e.preventDefault();
        console.log('evitando el envio')
    }

    controlarCambios(evento){
        this.setState({
            filterBy: evento.target.value
        }, () => this.props.filtrarPeliculas(this.state.filterBy))
        
    }

    render(){
        return (
            <React.Fragment>
           
        <section className="header">
        <div className="innerHeader">
        <div className="logo">
        <img src="" alt=""/>
        </div>
        <h1>Top movies</h1>
        <p>Ordenar ASC/ DESC</p>
        <ul className='row-header'>
           <li> <i className="fas fa-th"></i></li>
           <li><i className="fas fa-align-justify"></i></li>
        </ul>
        <form action="" onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" name="search" id="" placeholder="Search" value={this.state.filterBy}
                onChange ={(evento)=> this.controlarCambios(evento)}/>
                <button type="submit"><i className="fas fa-search"></i></button>
        </form>

        </div>
        </section>
        </React.Fragment>
           
        )
    }
} 

export default Header