import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {ucitajTakmicenja} from '../../store/action/index';
import Filter from '../takmicenje/filter';
import TakmicenjeItem from '../takmicenje/TakmicenjeItem';
import Sadrzaj from '../takmicenje/sadrzaj';

class Takmicenje extends Component {

    componentDidMount(){
        this.props.ucitajOTakmicenjima();
        document.getElementById("footer").style.background="rgb(45,178,171)";
        document.getElementById("btnLogg").style.visibility=" hidden";


    }

    render() {
     
        return (
            <div className="takmicenja">
               
                    <Filter/> 
                    {/* <Sadrzaj svaTakmicenja={this.props.takmicenja}/> */}
                    
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        takmicenja:state.Takmicenja
    }
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({
        ucitajOTakmicenjima:ucitajTakmicenja
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(Takmicenje);