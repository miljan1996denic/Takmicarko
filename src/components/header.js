import React, {Component} from 'react';
import {HashRouter as Router,Route, Link} from 'react-router-dom';
import takmicarko from '../../src/takmicarkoLogo.jpg';

class Header extends Component {

    render(){
        return(
        <header className="container-fluid">
                                
            <div className="headerDiv"><img src={takmicarko} className="headerPicture" alt="nema slike" /></div>
            <h2 className="headerNaslov"> Takmičarko</h2>  
            <button class="btn btn-sm btn-warning homeButton vvv" id= "btnLogg" ><Link className='link' to='/'>Izloguj se</Link></button>

        </header>
        )
    }
}

export default Header;

