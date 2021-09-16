import React, {Component} from 'react';
import Card from '../Card/Card';
//import MasTarjetas from '../MasTarjetas/MasTarjetas'
import Header from '../Header/Header';
import '../Movies/movies.css'


class Movies extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            peliculasIniciales: [],
            isLoaded: false, 
            nroPagina: 1,
            filas: false,
            text: "fas fa-th"
        }
    }
    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page='+ this.state.nroPagina

        fetch(url)
        .then( response => response.json() )
        .then ( data=> {
            //console.log(data);
            this.setState({
                peliculas: data.results,
                peliculasIniciales: data.results,
                isLoaded: true,
                nroPagina: this.state.nroPagina + 1
                
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
        let peliculasFiltradas = this.state.peliculasIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()) )
        
        this.setState({
            peliculas: peliculasFiltradas
        })
    }
    addMore(){
        console.log('hice click')
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=decfa5bfc3151df1ce9acb9ac606d5c4&language=en-US&page='+ this.state.nroPagina
        fetch(url)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                nroPagina: this.state.nroPagina + 1
            })
        })
        .catch (error => console.log(error))
    }
    ordenar(){
        if(this.state.filas){
            this.setState({
                    filas: false,
                    text: "fas fa-th"
                })
        } else{
            this.setState({
                filas: true,
                text: "fas fa-align-justify"


            })
        }
    }
    
    render(){
        return(
            <React.Fragment>
            <Header  filtrarPeliculas = {(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)}/>
           
            

           
            <div className={`movies ${this.state.filas ? 'filas' : 'columnas'}`}> 
            {
                this.state.isLoaded === false ? 
                <p> Cargando... </p> :
                
                this.state.peliculas.map((pelicula,idx)=> 
                
                <Card key={pelicula.title + idx} dataPelicula={pelicula} remove={(peliculaABorrar)=> this.deleteCard(peliculaABorrar)}/> )
                
    
            } 
            </div>

            <div className='cargar'>
            <button className="centrado" type="button" onClick={()=> this.addMore()}> Cargar más peliculas</button>
            </div>
            

            <i className={this.state.text} onClick= {()=>this.ordenar()}></i>
    
            </React.Fragment>
        )
    }
}

export default Movies