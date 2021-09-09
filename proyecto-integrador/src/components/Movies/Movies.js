import React, {Component} from 'react';
import Card from '../Card/Card';
import MasTarjetas from '../MasTarjetas/MasTarjetas'
import Buscador from '../Buscador/Buscador'


class Movies extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            peliculasIniciales: [],
            isLoaded: false, 
            nroPagina: ''
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
                peliculasIniciales: data.results,
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

    filtrarPeliculas(textoAFiltrar){
        let peliculasFiltradas = this.state.peliculasIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar).toLowerCase() )
        
        this.setState({
            peliculas: peliculasFiltradas
        })
    }
    
    render(){
        return(
            <React.Fragment>
            < Buscador 
            filtrarPeliculas = {(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)}/>   
             
            <div className='cargar'>
                <MasTarjetas />
            </div>
            <br />

            <div className="row card-container"> 
            {
                this.state.isLoaded === false ? 
                <p> Cargando... </p> :
                this.state.peliculas.map((pelicula,idx)=> 
                <Card key={pelicula.title + idx} dataPelicula={pelicula} /> )
            } 
            </div>
            </React.Fragment>
        )
    }
}
export default Movies