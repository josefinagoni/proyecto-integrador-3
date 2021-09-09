import React, {Component} from 'react';

class MasTarjetas extends Component{
    constructor(props){
        super(props);
        this.state={


        }
    }
    addMore(){
        let url = this.state.nroPagina;
        fetch(url)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                nroPagina: data
            })
        })
        .catch (error => console.log(error))
    }

    render(){
        return(
            <button type="button" onClick={()=> this.addMore()}>Cargar más peliculas</button>
        )
    }
}

export default MasTarjetas