import React, { Component } from 'react';
import TakmicenjeItem from './TakmicenjeItem';

class Sadrzaj extends Component {

    renderList(){
        if(!this.props.svaTakmicenja){
            return <li>Loading...</li>
        }
        return(
            <TakmicenjeItem /> 
    )
    }

    render() {
        return (
            <div className="sadrzaj">
                  {this.renderList()}
            </div>
        );
    }
}

export default Sadrzaj;