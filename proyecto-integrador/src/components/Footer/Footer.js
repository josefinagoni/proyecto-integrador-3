import React, {Component}  from 'react';

class Footer extends Component {
    constructor(){
        super();
        this.state={
            valor: ''
        }
    }

    render(){
        return(
            <ul className="team">
            <li>Josefina Goñi</li>
            <li>Guadalupe Shinzato</li>
            <li>Milagros Jones</li>
        </ul>
        )
    }
}

export default Footer;