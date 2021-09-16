import React, {Component}  from 'react';
import '../Footer/footer.css'

class Footer extends Component {
    constructor(){
        super();
        this.state={
            valor: ''
        }
    }

    render(){
        return(
          
        <div className="footer">
            <div className="innerFooter">
            <div >
              <img src="../img/logo1.jpg" className="logo" alt=""/>
            </div>

            <div className="titulos">
              <h1>Top movies</h1>
            </div>

            <ul className="team"> 
               <li>Josefina Goñi</li>
               <li>Guadalupe Shinzato</li>
               <li>Milagros Jones</li>
           </ul>
           </div>
        </div>
        )
    }
}

export default Footer;