import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {ucitajListuTakmicenja} from '../../store/action/index';
import {ucitajTakmicenja} from '../../store/action/index';

class TakmicenjeItem extends Component {

    constructor(props){
        super(props);
      
    }

    componentDidMount(){
        this.props.ucitajOTakmicenjima();
    }

  
    render() {
        return this.props.svaTakmicenja.map(takmicenje=>{
            
            let tip='';
            if (takmicenje.tip==="1")
                tip='Opstinsko';
            if(takmicenje.tip==="2")
                tip='Okruzno';
            if(takmicenje.tip=="3")
                tip="Drzavno";

            return (
                
            <div className="takmicenjeItem">
                <div className="ItemParaf"><h5>{ tip} takmičenje iz predmeta: {takmicenje.naziv}, {takmicenje.godina}. godine, održano u gradu:  {takmicenje.grad} </h5> </div>
                <br/>
                <button className='btn btn-warning link homeButton'  onClick={()=>{ this.modal(takmicenje.Id, takmicenje); }} data-target="#myModal" data-toggle="modal" >Prikaži rezultate takmičenja</button> 
              </div>
            );
        })
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
                '<thead><tr><th></th> <th>Ime</th> <th> Prezime </th><th> Broj poena</th> <th> Nagrada</th>  <th> Škola</th></thead>  </tr> <tbody>'+ this.show()+' </tbody></table> </div>';
           
        },50);
  

    }
    show(){

        let text='';
        let i=0;
        this.props.listaTakmicenja.forEach(item => {i++;
            text+= '<tr><td>'+i+'</td> <td>'+item.ime+'</td> <td> '+item.prezime +' </td> <td>'+item.brPoena+' </td> <td>'+item.nagrada+' </td> <td>'+ item.naziv + '</td>  </tr> ';
          });
    
        return text;
        
    }

}

function MapStateToProps(state){
    return {
        listaTakmicenja:state.listaTakmicenja,
        svaTakmicenja:state.Takmicenja
    }
}
function MapDispatchToProps(dispatch){
    return bindActionCreators({
        ucitajListuTakmicenja:ucitajListuTakmicenja,ucitajOTakmicenjima:ucitajTakmicenja
    },dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(TakmicenjeItem);