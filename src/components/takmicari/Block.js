import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {ucitajListuZaTakmicara} from '../../store/action/index';
import {ucitajTakmicenja} from '../../store/action/index';

class Block extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        return (
            <div>
                <div className="block" Style="height:auto">
                    <div className="takmicarHead">
                        <i class="fa fa-user"></i>
                        <h5> {this.props.item.ime} {this.props.item.prezime}</h5>
                    </div>
                    <hr/>
                    <div className="takmicarContent"> <p><h6>Škola:</h6> {this.props.item.naziv}</p>
                        <p> <h6>Grad: </h6>{this.props.item.grad}</p>
                    </div>
                    <button className='btn btn-warning link homeButton'  onClick={()=>{ this.modal(); }} data-target="#myModal" data-toggle="modal" >Informacije</button> 

                </div>
            </div>
        );
    }

    modal(){

        this.props.ucitajListuZaTakmicara(this.props.item.id);
        let title=document.getElementById("nazivModal");
        title.innerHTML="<h4 >Takmicar: " +  this.props.item.ime +" "+ this.props.item.prezime+"</h4>";
        let body=document.getElementById("bodyModal");
        
        setTimeout(()=>{
            let text=this.show();
            body.innerHTML=
            '<nav> '+
            '   <div class="nav nav-tabs" id="nav-tab" role="tablist"> '+
            '       <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Osnovne informacije</a> '+
            '       <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Takmicenja</a> '+
        
            '   </div> '+
            '</nav> '+
            '<div class="tab-content" id="nav-tabContent"> '+
                '<div class="tab-pane fade show active osnovneInformacije" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">'+
                    ' <div class="row"><span class="col-4"> Ime i prezime:</span> <b class="col-8">'+ this.props.item.ime +' '+ this.props.item.prezime+ '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Datum rodjenja:</span> <b class="col-8">' + this.props.item.datumRodjenja+ '</b> </div>'+
                    ' <div class="row"><span class="col-4"> JMBG:</span > <b class="col-8">'+ this.props.item.jmbg + '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Grad:</span > <b class="col-8">'+ this.props.item.grad + '</b> </div>' +
                    ' <div class="row"><span class="col-4"> Škola:</span > <b class="col-8">'+ this.props.item.naziv + '</b> </div>'  +
                    ' <div class="row"><span class="col-4"> Email:</span > <b class="col-8">'+ this.props.item.mail + '</b> </div> '+
                '</div> '+
                '<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">'+
                    '<table class="table table-condensed  table-striped table-bordered">'+
                    '<thead><tr><th></th> <th>Predmet</th> <th> Rang </th><th> Godina</th> <th> Razred </th><th> Broj poena</th> <th> Nagrada </th> </thead>  </tr> <tbody>'+ this.show()+ '</tbody> </table>'+
                '</div> '+
                '<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div> '+
            '</div> '
         
        },50);
      
    }
    show(){
        let tip='';
        let text='';
        let razred='';
        let i=0;
        this.props.listaZaTakmicara.forEach(item => {i++;
            if(item.tip=='1'){
                tip='Državno';
            }
            if(item.tip=='2'){
                tip='Okružno';
            }
            if(item.tip=='3'){
                tip='Opštinsko';
            }

            if(item.razred<5){
                razred=" srednje škole";
            }
            else
            razred=" osnovne škole";
            
            
            text+= '<tr><td>'+i+'</td> <td>'+item.naziv+'</td> <td> '+tip +' </td> <td>'+item.godina+' </td> <td>'+item.razred+'. '+razred+ '</td> <td>'+item.brPoena+' </td> <td>'+ item.nagrada+'</td>  </tr> ';
          });
    
        return text;
        
    }
}


function MapStateToProps(state){
    return {
        listaZaTakmicara:state.listaZaTakmicara,
        svaTakmicenja:state.Takmicenja
        
    }
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({
        ucitajListuZaTakmicara:ucitajListuZaTakmicara, ucitajOTakmicenjima:ucitajTakmicenja
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(Block);