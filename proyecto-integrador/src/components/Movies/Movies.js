import React, {Component} from 'react';
import Card from '../Card/Card'

class Movies extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            isLoaded: false, 
            nextUrl: ''
        }
    }
    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page=1'

        fetch(url)
        .then( response => response.json() )
        .then ( data=> {
            console.log(data);
            this.setState({
                peliculas: data.results,
                isLoaded: true,
                
            })   
        })
        .catch( error => console.log(error))
    }

    deleteCard(peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar);
        
        this.setState({
            peliculas: peliculasQueQuedan
        })
    }

    

    render(){
        return(
            <div className="row card-container"> 
            {
                this.state.isLoaded === false ? 
                <p> Cargando... </p> :
                this.state.peliculas.map((pelicula,idx)=> 
                <Card key={pelicula.title + idx} dataPelicula={pelicula} /> )
            } 
            </div>
        )
    }
}
export default Movies