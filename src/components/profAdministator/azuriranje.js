import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {povuciUcenike,izbrisiUcenika,searchStudent} from '../../store/action/adminActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TakmicarItem from './takmicarItem';
import { ucitajListuZaTakmicara } from '../../store/action';

class Azuriranje extends Component {

    componentDidMount(){
        this.props.povuciUcenike(this.props.admin);
    }

    popuniFormu(ucenik){
        document.getElementById("ime").value=ucenik.ime;
        document.getElementById("prezime").value=ucenik.prezime;
        document.getElementById("jmbg").value=ucenik.jmbg;
        document.getElementById("grad").value=ucenik.grad;
        document.getElementById("hidden").value=ucenik.id;
        document.getElementById("mejl").value=ucenik.mail;
        document.getElementById("dodaj").innerHTML="Izmeni takmičara";
        document.getElementById("skola").value=ucenik.skolaID;
        document.getElementById("datum").value=ucenik.datumRodjenja;
    }


    modal(item){

        this.props.ucitajListuZaTakmicara(item.id);
        let title=document.getElementById("nazivModal");
        title.innerHTML="<h4 >Takmicar: " +  item.ime +" "+ item.prezime+"</h4>";
        let body=document.getElementById("bodyModal");
        
        setTimeout(()=>{
            console.log(item);
            let text=this.show();
            body.innerHTML=
            '<nav> '+
            '   <div class="nav nav-tabs" id="nav-tab" role="tablist"> '+
            '       <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Osnovne informacije</a> '+
            '       <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Takmičenja</a> '+
            '   </div> '+
            '</nav> '+
            '<div class="tab-content" id="nav-tabContent"> '+
                '<div class="tab-pane fade show active osnovneInformacije" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">'+
                    ' <div class="row"><span class="col-4"> Ime i prezime:</span> <b class="col-8">'+ item.ime +' '+ item.prezime+ '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Datum rodjenja:</span> <b class="col-8">' + item.datumRodjenja+ '</b> </div>'+
                    ' <div class="row"><span class="col-4"> JMBG:</span > <b class="col-8">'+ item.jmbg + '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Grad:</span > <b class="col-8">'+ item.grad + '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Skola:</span > <b class="col-8">'+this.props.admin.naziv + '</b> </div>'  +
                    ' <div class="row"><span class="col-4"> Email:</span > <b class="col-8">'+ item.mail + '</b> </div> '+
                '</div> '+
                '<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">'+
                    '<table class="table table-condensed  table-striped table-bordered">'+
                    '<thead><tr><th></th> <th>Predmet</th> <th> Rang </th><th> Godina</th> <th> Broj poena</th> <th> Nagrada </th> </thead>  </tr> <tbody>'+ this.show()+ '</tbody> </table>'+
                '</div> '+
            '</div> '
         
        },100);
      
    }
    show(){
        let text='';
        let i=0;
        this.props.listaZaTakmicara.forEach(item => {i++;
            text+= '<tr><td>'+i+'</td> <td>'+item.naziv+'</td> <td> '+item.tip +' </td> <td>'+item.godina+' </td> <td>'+item.brPoena+' </td> <td>'+ item.nagrada+'</td>  </tr> ';
          });
    
        return text;
        
    }

    renderItems(){
        if(!this.props.ucenici){
            return <li>Loading...</li>
        }
    
        return this.props.ucenici.map(ucenik=>{
            return(
                <div className="takmicar " Style="margin-top:30px">
                 <div className="block">
                    <div className="takmicarHead">
                        <i class="fa fa-user"></i>
                        <h5> {ucenik.ime} {ucenik.prezime}</h5>
                    </div>
                    <hr/>
                    <div className="takmicarContent"> <p><h6>JMBG: </h6> {ucenik.jmbg}</p>
                        <p> <h6>Mail:  </h6>{ucenik.mail}</p>
                    </div>
                   
                    <button onClick={()=>this.props.izbrisiUcenika(ucenik.id,this.props.admin)} class='btn btn-sm btn-warning link homeButton profB'> Izbrisi</button>
                    <button onClick={()=>this.popuniFormu(ucenik)} class='btn btn-sm btn-warning link homeButton profB'> Azuriraj</button>
                    <button className='btn  btn-sm dgm'  onClick={()=>{ this.modal(ucenik); }} data-target="#myModal" data-toggle="modal" >Informacije</button> 

            </div> </div>
            )
        })
    }

    render() {

       
        return (
            <div>
                 <div className="profSearch">
                        <input  className="form-control searchL" type="text" placeholder="Ime ili prezime takmicara" onChange={this.props.searchStudent} />
                </div>
                <div>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        ucenici:state.ucenici,
        listaZaTakmicara:state.listaZaTakmicara,
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({povuciUcenike,izbrisiUcenika,searchStudent,ucitajListuZaTakmicara:ucitajListuZaTakmicara},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(Azuriranje);