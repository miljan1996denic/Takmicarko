import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import $ from 'jquery';

class Dobrodosao extends Component {

    componentDidMount(){
        setTimeout(()=> {
            $(".dobrodosao").fadeOut().empty();
          }, 5000);
    }

    render() {
        return (
           
              
                    <div  className="dobrodosao row">
                        <div className="alert alert-success" role="alert">
                            {this.props.admin.ime}  {this.props.admin.prezime}, uspešno ste se ulogovali kao {this.props.rec}. Dobrodosli.
                        </div>
                    </div>
              
           
        );
    }
}

export default Dobrodosao;  