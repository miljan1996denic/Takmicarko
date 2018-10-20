import React, { Component } from 'react';
import {postRegistracija} from '../../store/action/loginAction';
import {getRegistracija} from '../../store/action/loginAction';
import {getSkolaTakmicar} from '../../store/action/takmicariActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router'
import takmicarko from '../../../src/takmicarkoLogo.jpg';


class SingUp extends Component {


    constructor(){
        super();
        let niz;
        this.state={
            ime:'',
            prezime:'',
            email:'',
            jmbg:'',
            korisnickoIme:'',
            sifra:'',
            ponovljenasifra:'',
            role:'',
            redirect: false
        }
    }
    onChangeInputIme=(event)=>{
        this.setState({
            ime:event.target.value
        })
    }
    onChangeInputPrezime=(event)=>{
        this.setState({
            prezime:event.target.value
        })
    }
    onChangeInputEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    onChangeInputJmbg=(event)=>{
        this.setState({
            jmbg:event.target.value
        })
    }
    onChangeInputKorisnicko=(event)=>{
        this.setState({
            korisnickoIme:event.target.value
        })
    }
    onChangeInputSifra=(event)=>{
        this.setState({
            sifra:event.target.value
        })
    }
    onChangeInputSifraPonovljena=(event)=>{
        this.setState({
            ponovljenasifra:event.target.value
        })
    }
    changeEventHandlerRole=(event)=>{
                this.setState({
            role:event.target.value
        })
    }
    changeEventHandlerProfesor=()=>{
        document.getElementById('SkolaProfesora').disabled=false;
    }
    changeEventHandlerOrg=()=>{
        document.getElementById('SkolaProfesora').disabled=true;
    }
    
    
    handleSubmits=()=>{
        this.props.getRegistracija();
        let emp=0;
        if(this.props.takmicari.list){
            
            this.props.takmicari.list.map((item)=>{
            if(item.korisnicko_ime === this.state.korisnickoIme)
                emp=1;
            })
            if(emp===1){
                alert('Korisničko ime već postoji');
            }
            else if(this.state.sifra != this.state.ponovljenasifra)
            {
                alert('Šifra i ponovljena Šifra nisu jednake');
            }
            else if(this.state.sifra.length < 6)
            {
                alert('Suviše kratka šifra');
            }
            else{
                this.props.postRegistracija();
                document.getElementById('korime').value="";
                document.getElementById('sifra').value="";
                document.getElementById('ponovisifru').value="";
                document.getElementById('ime').value="";
                document.getElementById('prezime').value="";
                document.getElementById('email').value="";
                document.getElementById('jmbg').value="";
                document.getElementById('radio1').checked=false;
                document.getElementById('radio2').checked=false;
                document.getElementById("SkolaProfesora").disabled=true;
                alert('Uspesna registracija');
                this.state.redirect=true;
                this.forceUpdate();
            }    
        }
    }
    renderSkole=()=>{
        if(!this.props.skola){
            return <li>Loading...</li>
        }
        if(this.props.skola){
            return this.props.skola.map((item)=>{
                return(
                    <option value={item.id} >{item.naziv}</option>
                )
            })
        }
    }

    componentDidMount() {
        this.props.getRegistracija();
        this.props.getSkolaTakmicar();
        document.getElementById("footer").style.background="rgb(237,219,53)";
        document.getElementById("btnLogg").style.visibility=" hidden";

 
      }

    render() {
        console.log("PROPS",this.props)
        if(this.state.redirect===true)
            {
               return <Redirect to={{
                pathname: '/logovanje'
              }}/> 
            
            }
        
        return (
                
        <div class="row">
            
            <div className="limiter">
                <div className="container-login100" Style="background-image: url('images/bg-01.jpg');">
                
                    <div className="wrap-login100">
                        <div className="login100-form validate-form">
                            <span className="login100-form-logo" Style="background:rgb(45,178,171); border:2px solid white">
                                
                                <img src={takmicarko} alt="nema slike" Style=" width:50px; height:50px;"/>
                            </span>

                            <span className="login100-form-title p-b-34 p-t-27">
                                Registracija
                            </span>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="text"  placeholder="Ime" id="ime" onChange={this.onChangeInputIme}/>
                                <span className="focus-input100" data-placeholder="&#xf20e;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" id="prezime" onChange={this.onChangeInputPrezime} placeholder="Prezime"/>
                                <span className="focus-input100" data-placeholder="&#xf20e;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" id="email" onChange={this.onChangeInputEmail}  placeholder="Email"/>
                                <span className="focus-input100" data-placeholder="&#xf15a;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" id="jmbg" onChange={this.onChangeInputJmbg}  placeholder="JMBG"/>
                                <span className="focus-input100" data-placeholder="&#xf129;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="text" id="korime" onChange={this.onChangeInputKorisnicko}  placeholder="Korisničko ime"/>
                                <span className="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" id="sifra" data-type="password" onChange={this.onChangeInputSifra} placeholder="Šifra"/>
                                <span className="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100"  type="password" id="ponovisifru" data-type="password" onChange={this.onChangeInputSifraPonovljena} placeholder="Ponovi šifru"/>
                                <span className="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>

                            <select id="SkolaProfesora" name="SkolaProfesora" className="js-example-basic-single selectL"  disabled >
                                <option value=""  disabled selected hidden >Izaberi školu</option>
                                {this.renderSkole()}
                            </select>					
                            <div className="containerL">
                                    <div className="itemL">
                                        <input name="org" type="radio" value="1" id="radio1" onChange={this.changeEventHandlerRole} onChange={this.changeEventHandlerOrg}/>
                                        <span className="labelL"> Organizator takmičenja </span>
                                    </div>
                                    <div className="itemL">
                                        <input name="org" type="radio" value="2" id="radio2" onChange={this.changeEventHandlerRole }  onChange={this.changeEventHandlerProfesor}/> 
                                        <span className="labelL"> Profesor administrator </span>
                                    </div>
                            </div>
                        



                            <div className="container-login100-form-btn" >
                                <Link className='loginB' to='/'>  <button className="login100-form-btn"  Style="margin:10px;">
                                        Nazad 
                                    </button>
                                </Link>
                            
                                <button onClick={this.handleSubmits} value="Sign Up" className="login100-form-btn" Style="margin:10px;">
                                    Registruj se
                                </button>
                            
                            </div>
                        

                            
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
            
        );
    }
}

function mapStateToProps(state){
    return{
        takmicari:state.takmicari,
        skola:state.skole
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postRegistracija,getRegistracija,getSkolaTakmicar},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SingUp);