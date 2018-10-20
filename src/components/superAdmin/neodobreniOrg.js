import React, { Component } from 'react';
//import {getRegistracija} from '../../store/action/loginAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link} from 'react-router-dom';
import {izbrisiRegistrovanog,potvrdiNeodobrenog} from '../../store/action/organizatorActions';
import {getNeodobreneOrg} from '../../store/action/superAdminActions';

class NeodobreniOrg extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getNeodobreneOrg();
    }

    listaNePotvrdjenih = (list) =>{
        if(list){
            return list.map((item)=>{
                if(item.odobreno == 0 && item.role ==2)
                {
                    return(
               
                    <div  className="col-sm-4 takmicar" Style="height:220px;">
                    <div className="block">
                    <div className="takmicarHead">
                       <i class="fa fa-user"></i>
                        <h5> {item.ime} {item.prezime}</h5> <hr/>
                    </div>
                        <div className="" Style="margin-top:8px; margin-left:4px;">
                            <div> <b>Škola: </b> {item.naziv}</div>
                            <div> <b>JMBG: </b> {item.jmbg}</div>
                            <div> <b>Korisničko ime: </b> {item.korisnicko_ime}</div><br/>
                            <button onClick={()=>this.props.potvrdiNeodobrenog(item.id)} className='btn btn-warning link homeButton btnss'  >Potvrdi</button>
                            <button onClick={()=>this.props.izbrisiRegistrovanog(item.id)} className='btn btn-warning link homeButton btnss' >Odbaci</button>
            
                        </div>
                    </div>
                    </div>
                    )
                }
                
            })
        }
    }
    render() {
        return (
            <div className="NeodobreniOrg">
                {this.listaNePotvrdjenih(this.props.neodobreni)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        neodobreni:state.neodobreni
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getNeodobreneOrg,izbrisiRegistrovanog,potvrdiNeodobrenog},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(NeodobreniOrg);