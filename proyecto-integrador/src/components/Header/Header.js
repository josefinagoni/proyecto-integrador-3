import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(){
        super();
        this.state={
            filterBy:'',
            filas: false

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
        <div >
        <img src="../img/logo1.jpg" className="logo" alt=""/>
        </div>
        <div className="titulos">
        <h1>Top movies</h1>
        </div>
        <div className="subtitulos">
        <p>Ordenar ASC/ DESC</p>
    
            <i className={this.state.text} onClick= {()=>this.props.ordenar()}></i>
            
        
        </div>
        
        <form action="" onSubmit={(event)=> this.evitarSubmit(event)} className="buscador">
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