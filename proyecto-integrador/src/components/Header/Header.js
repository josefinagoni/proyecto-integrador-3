import react from 'react';
import React, {Component} from 'react';


class Header extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <React.Fragment>
            <h1>Top movies</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
        </React.Fragment>
           
        )
    }
} 

export default Header