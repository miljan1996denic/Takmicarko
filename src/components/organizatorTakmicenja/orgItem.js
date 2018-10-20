import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {izbrisiTakmicenje} from '../../store/action/organizatorActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { ucitajListuTakmicenja } from '../../store/action';

class OrgItem extends Component {

    constructor(props){
        super(props);
        this.state={
            tip: ''    
        }
    }

    componentDidMount(){
        this.ispitaj();
        // this.props.ucitajOTakmicenjima();

    }

    hendleChange=(ime)=>{
        this.setState({
            tip:ime
        })
    }

    ispitaj=()=>{
        if (this.props.obj.tak.tip==="1")
            this.hendleChange('Opstinsko')
        if(this.props.obj.tak.tip==="2")
            this.hendleChange('Okruzno')
        if(this.props.obj.tak.tip==="3")
            this.hendleChange('Drzavno')
    }

    popuniKontrole(takmicenje){
        document.getElementById("predmetOrg").value=takmicenje.id;
        document.getElementById("mestoOrg").value=takmicenje.grad;
        document.getElementById("godinaOrg").value=takmicenje.godina;
        document.getElementById("tipOrg").value=takmicenje.tip;
        document.getElementById("dodajTakmicenje").innerHTML="Izmeni takmičenje";
        document.getElementById("hiddenOrg").value=takmicenje.Id;
        document.getElementById("razredOrg").value=takmicenje.razred;
    }

    render() {
        let tip='';
        if (this.props.obj.tak.tip==="1")
            tip='Opstinsko';
        if(this.props.obj.tak.tip==="2")
            tip='Okruzno';
        if(this.props.obj.tak.tip=="3")
            tip="Drzavno";
        
        return (
            
            <div className="takmicenjeItem" Style="height:auto;">
                <div className="ItemParaf"><h5>{tip} takmičenje iz predmeta: {this.props.obj.tak.naziv} , {this.props.obj.tak.godina}. godine,<br/> održano u gradu:  {this.props.obj.tak.grad} </h5> </div>
                <br/>
              <button id="izbrisiOrg" onClick={()=>this.props.izbrisiTakmicenje(this.props.obj.tak.Id,this.props.obj.IDOrg)} className='btn btn-warning link homeButton aaa' >Izbrisi takmičenje</button>
              <button id="azurirajOrg" onClick={()=>this.popuniKontrole(this.props.obj.tak)} className='btn btn-warning link homeButton aaa' >Ažuriraj takmičenje</button>
              <button className='btn btn-warning link homeButton aaa'  onClick={()=>{ this.modal(this.props.obj.tak.Id, this.props.obj.tak); }} data-target="#myModal" data-toggle="modal" >Prikaži rezultate takmičenja</button> 

            </div>
        );
    }

    
    modal(id,takmicenje){
       
        let title=document.getElementById("nazivModal");
        title.innerHTML="<h4 > Predmet: "+takmicenje.naziv+", Godina: "+takmicenje.godina +".</h4>";
        let body=document.getElementById("bodyModal");
        
        this.props.ucitajListuTakmicenja(id);

        setTimeout(()=>{

            let text=this.show();
            body.innerHTML=
            '<div classname="modalBody">'+
                '<table class="table table-condensed  table-striped table-bordered">'+
                '<thead><tr><th></th> <th>Ime</th> <th> Prezime </th><th> Broj poena</th> <th> Nagrada</th> <th> Škola</th></thead>  </tr> <tbody>'+ this.show()+' </tbody></table> </div>';
           
        },100);
  

    }
    show(){

        let text='';
        let i=0;
        this.props.listaTakmicenja.forEach(item => {i++;
            text+= '<tr><td>'+i+'</td> <td>'+item.ime+'</td> <td> '+item.prezime +' </td> <td>'+item.brPoena+' </td> <td>'+item.nagrada+' </td>  <td>'+ item.naziv + '</td>  </tr> ';
          });
    
        return text;
        
    }

}
function MapStateToProps(state){
    return {
        listaTakmicenja:state.listaTakmicenja,
    }
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({izbrisiTakmicenje, ucitajListuTakmicenja:ucitajListuTakmicenja},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(OrgItem);