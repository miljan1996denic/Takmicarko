import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {inputFilteri,getPredmeti} from '../../store/action';
import { Link} from 'react-router-dom';
import {ucitajTakmicenja} from '../../store/action/index';
import Sadrzaj from '../takmicenje/sadrzaj';

class Filter extends Component {

    componentDidMount(){
        this.props.getPredmeti();
        this.props.ucitajOTakmicenjima();
    }

    renderPredmeti(){
        if(!this.props.predmeti){
            return <li>Loading...</li>
        }
        return this.props.predmeti.map(predmet=>{
            return(
                <div className="predmeti">
                    <input onChange={()=>this.props.inputFilteri()} type="checkbox" id="predmet" value={predmet.naziv} /> {predmet.naziv}
                </div>
            )
        })
    }

    renderGodine(){
        let godine=[2014,2015,2016,2017,2018];
        return godine.map(godina=>{
            return(
                <option>{godina}</option>
            )
        })
    }

    renderGradove(){
        let gradovi=["Nis","Beograd","Novi Sad","Trebinje","Leskovac"];
        return gradovi.map(grad=>{
            return(
                <option>{grad}</option>
            )
        })
    }

    render() {
        return (
            <div className="row ">
                
                <div className="col-lg-2 sidebarFilter">
                    <button className="btn backFilter">
                        <Link className='link2' to='/'>Vrati se nazad</Link> 
                    </button>

                    <h5 className="filterTitle">Takmičenja iz predmeta:</h5>
                    {this.renderPredmeti()}
                </div>

                <div className="col-lg-10 headerFilter ">
                
                    {/* <div className="headFilterTitle">
                        Pretraga
                    </div> */}
                   {/* <div className=" headerFilter"> */}
                    
                    <div className="items">
                        <div className="filterItem">
                        
                            <span className="headFilterTitle">Godina:</span> <br/> <select className="form-control" onChange={()=>this.props.inputFilteri()} id="godina">
                                <option value="" >Izaberi</option>
                                    {this.renderGodine()}
                                </select>
                        </div>

                        <div className="filterItem"> 
                        <span className="headFilterTitle"> Grad:</span> <br/> <select className="form-control" onChange={()=>this.props.inputFilteri()} id="grad">
                            <option value=""  >Izaberi</option>
                                {this.renderGradove()}
                            </select>
                        </div>

                        <div className="filterItem">
                        <span className="headFilterTitle"> Tip takmičenja: </span><br/> <select className="form-control" onChange={()=>this.props.inputFilteri()} id="tip">
                            <option value="" >Izaberi</option>
                            <option value="1" >Opštinsko</option>
                            <option value="2">Okružno</option>
                            <option value="3">Državno</option>
                        </select>
                        </div>
                        <div className="filterItem">
                        <span className="headFilterTitle"> Razred: </span><br/> <select className="form-control" onChange={()=>this.props.inputFilteri()} id="razred">
                            <option value="" >Izaberi</option>
                            <option value="1" >1. razred srednje škole</option>
                            <option value="2">2. razred srednje škole</option>
                            <option value="3">3. razred srednje škole</option>
                            <option value="1" >4. razred srednje škole</option>
                            <option value="2">5. razred osnovne škole</option>
                            <option value="3">6. razred osnovne škole</option>
                            <option value="1" >7. razred osnovne škole</option>
                            <option value="2">8. razred osnovne škole</option>
                        </select>
                        </div>
                    </div>
                    
                    <div className="aaaa">
                    <Sadrzaj svaTakmicenja={this.props.takmicenja}/>
                    </div>
                </div>
               
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        predmeti:state.predmeti,
        takmicenja:state.Takmicenja
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({inputFilteri,getPredmeti,ucitajOTakmicenjima:ucitajTakmicenja},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(Filter);