import React, {Component} from 'react';

class Buscador extends Component{
    constructor(){
        super();
        this.state = {
            valor: ''
        }
    }

    evitarSubmit(e){
        e.preventDefault();
        console.log('evitando el envio')
    }

    controlarCambios(evento){
        this.setState({
            valor: evento.target.value
        }, ()=> console.log(this.state.valor))
    }

    render(){
        return(
            <form action="" onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" name="search" id="" placeholder="Search" value={this.state.valor}
                onChange ={(evento)=> this.controlarCambios(evento)}/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Buscador