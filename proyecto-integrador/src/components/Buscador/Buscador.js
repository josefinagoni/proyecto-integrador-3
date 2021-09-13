import React, {Component} from 'react';

class Buscador extends Component{
    constructor(){
        super();
        this.state = {
            filterBy: ''
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
        return(
            <form  onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" name="search" id="" placeholder="Search" value={this.state.filterBy}
                onChange ={(evento)=> this.controlarCambios(evento)}/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}
 
export default Buscador