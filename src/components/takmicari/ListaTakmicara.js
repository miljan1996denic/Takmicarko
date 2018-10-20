import React, { Component } from 'react';
import {connect} from 'react-redux';
import Block from '../takmicari/Block';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

const URL_HOME = 'http://localhost:3005/takmicari';

class ListaTakmicara extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            pocetnalista:''
        }
    }
    
    listOfTakmicari = ({list}) =>{
        let ids=[];
        let flag=true;
        if(list){
            return list.map((item)=>{
                flag=true
                ids.forEach(key=>{
                    if(item.id===key){
                            flag=false;
                    }
                })
                if(flag===true){
                ids.push(item.id);
               
                return(
                    <div className="col-sm-4 takmicar">
                        <Block item={item}/>
                    </div>
                )}
            })
        }
    }

    render() {
        return (
            <div className="grupaTakmicara">
                {this.listOfTakmicari(this.props.takmicari)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        takmicari:state.takmicari
    }

}

export default connect(mapStateToProps,null)(ListaTakmicara); 