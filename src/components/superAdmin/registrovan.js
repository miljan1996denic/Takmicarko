import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {izbrisiAdministratora} from '../../store/action/superAdminActions';

class Registrovan extends Component {

    render() {
        if(!this.props.registrovani){
            return <li>Loading...</li>
        }
        return this.props.registrovani.map(registrovan=>{
            let role='';
            if(registrovan.role=="2"){
                role='Organizator takmicenja';
            }
            if(registrovan.role=="3"){
                role='Profesor administrator';
            }
            return(
                <div  className="col-sm-4 takmicar" Style="height:250px; width:245px;">
                <div className="block">
                <div className="takmicarHead">
                   <i class="fa fa-user"></i>
                    <h5> {registrovan.ime} {registrovan.prezime}</h5> <hr/>
                </div>
                    <div className="divv" Style="margin-top:8px; margin-left:4px;">
                        <div> <b>Škola: </b> {registrovan.naziv}</div>
                        <div> <b>JMBG: </b> {registrovan.jmbg}</div>
                        <div> <b>Korisničko ime: </b> {registrovan.korisnicko_ime}</div>
                        <div> <b>Privilegija: </b> {role}</div><br/>
                        <button onClick={()=>this.props.izbrisiAdministratora(registrovan.id)} className='btn btn-warning link homeButton btnss' >Izbriši</button>
                        <br/>
                    </div>
                </div>
                </div>
                  
            )
    })
}
}


function MapDispatchToProps(dispatch){
    return bindActionCreators({izbrisiAdministratora},dispatch)
}

export default connect(null,MapDispatchToProps)(Registrovan);