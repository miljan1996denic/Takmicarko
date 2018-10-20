import React, { Component } from 'react';
import { Redirect,Route } from 'react-router-dom';
import NeodobreniOrg from './neodobreniOrg'
import Odobriti from '../organizatorTakmicenja/odobriti';
import SviRegistrovani from './sviRegistrovani';
import Dobrodosao from '../profAdministator/dobrodosao';
import { Link} from 'react-router-dom';


let obj=null;

class SuperAdmin extends Component {

    constructor(props){
        super(props);

        this.state={
            redirect: false,
            role:''
        }
    }

    handleSubmits1=()=>{
        this.state.role=3;
        this.state.redirect=true;
        this.forceUpdate();
    }
    handleSubmits2=()=>{
        this.state.role=2;
        this.state.redirect=true;
        this.forceUpdate();
    }
    componentDidMount(){
        document.getElementById("btnLogg").style.visibility="  visible";
        document.getElementById("footer").style.background="rgb(45,178,171)";

    }
    render() {

        // let obj={
        //     email: "bokistef96@yahoo.com",
        //     id:"1",
        //     ime :"Borisalv",
        //     jmbg:"11111",
        //     korisnicko_ime:"zoki",
        //     naziv:"bora",
        //     odobreno:"1",
        //     prezime :"Stefanovic",
        //     role:"1",
        //     sifra: "1",
        //     skolaID:"1"
        // };
         let obj=this.props.location.state.results;
        if(this.state.role== 2)
            {
               return <Redirect to={{
                pathname: '/orgTakmicenja',
                state: { results: obj }
              }}/> 
            
            }
            else if(this.state.role== 3)
            {
                return <Redirect to={{
                 pathname: '/profAdministrator',
                 state: { results: obj }
               }}/>
            }


        return (
            
           <div className="kontejnerSuper row">
            <div Style="width:99%">
                <div> <Dobrodosao rec="super administrator" admin={obj} /></div>
              
                    <div className="row dugmiciSuper" >
                        <button onClick={this.handleSubmits1} Style="flex: 1; margin:3px 65px 3px 65px"className="btn btn-warning btn-lg link homeButton">Budi profesor administartor</button>
                        <button onClick={this.handleSubmits2} Style="flex: 1; margin:3px 65px 3px 65px"className=" btn btn-warning btn-lg link homeButton">Budi organizator takmičenja</button>
                    </div>
                    
                    <div className="kartice">
                        <nav Style="margin:4px 0px 0px 4px ;">  
                        <div class="nav nav-tabs bcg" id="nav-tab2" role="tablist">   
                            <a class="nav-item nav-link active tabss" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Neodobreni organizatori takmičenja</a>    
                            <a class="nav-item nav-link tabss" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Administratori</a>    
                        </div>    
                    </nav>    
                    <div class="tab-content bcg" id="nav-tabContent">    
                         <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" Style="margin-top:20px;">   
                            <NeodobreniOrg></NeodobreniOrg>
                        </div>    
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">          
                             <SviRegistrovani></SviRegistrovani>
                        </div>    
                    </div>  
                </div>
                        
                        
                    
            </div>
            </div>
        );
    }
}

export default SuperAdmin;