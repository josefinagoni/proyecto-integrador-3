import React, {Component} from 'react';
import './card.css';


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
            <article>
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close"></i>
            </section>
            <main>
                <img src={`https://image.tmdb.org/t/p/w500${this.props.dataPelicula.poster_path}`} alt={`${this.props.dataPelicula.title}`}/>
                <h3>{this.props.dataPelicula.title}</h3>
                <p className="description">{this.props.dataPelicula.overview}</p>
                <section className="aditional-info">
                    <p>Fecha de publicacion: {this.props.dataPelicula.release_date}</p>
                    <p className='more' onClick={()=>this.props.deleteCard(this.props.dataPelicula.id)}> Borrar</p>
                </section>
                <div className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> 
                    <p>Votos: {this.props.dataPelicula.vote_average}</p>
                    <p>Reproducciones: {this.props.dataPelicula.popularity}</p>
                    <p>Idioma: {this.props.dataPelicula.original_language}</p>
                </div>
                <p className='more' onClick={ () => this.viewMore()}> {this.state.text}</p>
            </main>
        </article>
        </React.Fragment>

        )
    }
} 

export default Card 