import React, {Component} from 'react';

class MasTarjetas extends Component{
    constructor(props){
        super(props);
        this.state={


        }
    }

    render(){
        return(
            <button type="button" onClick={()=> this.addMore()}>Cargar más peliculas</button>
        )
    }
}

export default MasTarjetas