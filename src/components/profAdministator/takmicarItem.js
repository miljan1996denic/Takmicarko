import React, { Component } from 'react';

class TakmicarItem extends Component {
    render() {
        return (
            <div>
                  <div className="block">
                    <h5>Ime: {this.props.item.ime}</h5>
                    <h5>Prezime: {this.props.item.prezime}</h5>
                    <p>JMBG: {this.props.item.jmbg}</p>
                    <p>Mail: {this.props.item.mail}</p>
                </div>
            </div>
        );
    }
}

export default TakmicarItem;