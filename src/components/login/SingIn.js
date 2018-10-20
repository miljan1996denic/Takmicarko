import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRegistracija} from '../../store/action/loginAction';
import { Redirect } from 'react-router'
import SingUp from './SingUp';
import takmicarko from '../../../src/takmicarkoLogo.jpg';


let pom=null;

class SingIn extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            korisnickoIme:'',
            sifra:'',
            redirect: false,
            role:''
        }
    }
    
    handleKorisnickoIme=(event)=>{
        this.setState({
            korisnickoIme:event.target.value
        })
    }
    handleSifra=(event)=>{
        this.setState({
            sifra:event.target.value
        })
    }

    handleSubmits=()=>{
        let emp=0;
        
        if(this.props.takmicari.list){
            
            this.props.takmicari.list.map((item)=>{
                if(this.state.korisnickoIme === item.korisnicko_ime)
                {
                    emp=1;
                    if(this.state.sifra === item.sifra)
                    {
                        emp=2;
                        if(item.odobreno==1)
                        {
                            emp=3;
                            pom=item;
                            this.state.role=pom.role;
                            this.state.redirect=true;
                           
                        }    
                    }
                }
    
            })
            if(emp===0){
                alert('Korisnik ne postoji,morate prvo da se regisrujete');
            }
            else if(emp===1){
                alert('Pogresna sifra');
            }
            else if(emp===2)
            {
                alert('Vas nalog jos nije odobren');
              
            }
            else if(emp===3)
            {   
                this.forceUpdate();
            }
        }
    }

    componentDidMount() {
        this.props.getRegistracija();
        document.getElementById("footer").style.background="rgb(237,219,53)";
        document.getElementById("btnLogg").style.visibility=" hidden";
      }


    render() {
        
            if(this.state.role==1){
                return <Redirect to={{
                    pathname: '/superAdmin',
                    state:{results:pom}
                }}/>
            }
            if(this.state.role== 2)
            {
               return <Redirect to={{
                pathname: '/orgTakmicenja',
                state: { results: pom }
              }}/> 
            
            }
            else if(this.state.role== 3)
            {
                return <Redirect to={{
                 pathname: '/profAdministrator',
                 state: { results: pom }
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
                                Logovanje
                            </span>
        
                            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                                <input className="input100" type="text"id="korisIme" onChange={this.handleKorisnickoIme}  placeholder="Korisničko ime"/>
                                <span className="focus-input100" data-placeholder="&#xf207;"></span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" id="korisnickoIme" data-type="password" onChange={this.handleSifra} placeholder="Šifra"/>
                                <span className="focus-input100" data-placeholder="&#xf191;"></span>
                            </div>
        
        
                            <div className="container-login100-form-btn" >
                            <Link className='loginB' to='/'>  <button className="login100-form-btn"  Style="margin:10px;">
                                    Nazad 
                                </button>
                            </Link>
                                <button id="btnL" className="login100-form-btn" onClick={this.handleSubmits} value="Sign In"  Style="margin:10px;" >
                                    Uloguj se 
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
        takmicari:state.takmicari
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getRegistracija},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SingIn);