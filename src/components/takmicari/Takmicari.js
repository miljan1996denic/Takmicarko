import React, { Component } from 'react';
import Pretraga from '../takmicari/Pretraga';


class Takmicari extends Component {

    componentDidMount(){
        document.getElementById("footer").style.background="rgb(45,178,171)";
        document.getElementById("btnLogg").style.visibility=" hidden";

    }
    render() {
        

        return (
            <div>
                <Pretraga/>          
            </div>
        );
    }
}

export default Takmicari;