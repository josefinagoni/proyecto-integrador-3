import React, {Component} from 'react';


class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            
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
                <img src={this.props.dataPelicula.poster_path} alt=""/>
                <h3>{this.props.dataPelicula.title}</h3>
                <p className="description">{this.props.dataPelicula.overview}</p>
                <section className="aditional-info">
                    <p>Reproducciones: {this.props.dataPelicula.popularity}</p>
                    <p>Fecha de publicacion: {this.props.dataPelicula.release_date}</p>
                    <p>Idioma: {this.props.dataPelicula.original_language}</p>
                    <p className='more' onClick={()=>this.props.remove(this.props.dataPelicula.id)}> Borrar</p>
                </section>
                <button> Ver mas</button>
            </main>
        </article>
        </React.Fragment>

        )
    }
} 

export default Card 