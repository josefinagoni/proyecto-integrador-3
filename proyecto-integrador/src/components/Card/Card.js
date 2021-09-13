import React, {Component} from 'react';
import './card.css'



class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            text: 'Ver más',
            viewMore: false,
           
        }
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                text: 'Ver más',
                viewMore: false
            })
        }else{
            this.setState({
                text: 'Ver menos',
                viewMore: true
            })
        }
    }
    

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
            <article className="movie-card">
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close"  onClick={()=>this.props.remove(this.props.dataPelicula.id)}></i>
            </section>
            <main>
                <img src={`https://image.tmdb.org/t/p/w342${this.props.dataPelicula.poster_path}`} alt={`${this.props.dataPelicula.title}`}/>
                <h3>{this.props.dataPelicula.title}</h3>
                <p className="description">{this.props.dataPelicula.overview}</p>
                <section className="aditional-info">
                    <p className="info">Fecha de publicacion:</p> <span>{this.props.dataPelicula.release_date}</span> 
    
                </section>
                <div className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> 
                    <p className="info">Votos: </p> <span>{this.props.dataPelicula.vote_average}</span>
                    <p className="info">Reproducciones: </p> <span>{this.props.dataPelicula.popularity}</span>
                    <p className="info">Idioma: </p> <span>{this.props.dataPelicula.original_language}</span>
                </div>
                <p className='more' onClick={ () => this.viewMore()}> {this.state.text}</p>
            </main>
        </article>
        </React.Fragment>

        )
    }
} 

export default Card 