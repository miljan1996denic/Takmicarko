import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Home extends Component {
    componentDidMount(){
        setTimeout(()=>{
        document.getElementById("footer").style.background="rgb(45,178,171)";},50)
        document.getElementById("btnLogg").style.visibility=" hidden";

    }
    

    render() {
       

        return (
            <div className="row">
                <div class="content home">
                    <div class="navigation">
                        <button class="btn btn-warning homeButton loginButton" ><Link className='link' to='/logovanje'>Uloguj se</Link></button>
                        <button class="btn btn-warning homeButton loginButton" ><Link className='link' to='/registracija'>Registruj se</Link></button>
                    </div>
                    <div class="welcomeText">
                        <h1 class="homeTitle">Dobro došli na sajt Takmičarko!</h1>
                        <p class="font-weight-light homeBody">Takmičarko je sajt namenjen čuvanju podataka o takmičenjima i takmičarima. Na sajtu Takmičarko mozete pregledati rezultate svih održanih takmičenja, filtrirajući takmičenja po predmetu, gradu održavanja, razredu, godini kao i tipu takmičenja. Takodje sajt pruža mogućnost i pregledanja svih takmičara, kao i njihovih individualnih dostignuća. Sajt Takmičarko pruža i mogućnosti profesorima da upravljaju podacima svojih učenika, kao i organizatorima da upravljaju svojim takmičenjama, sve to uz kontrolu super admina sajta Takmičarko.</p>
                    </div>

                     <div class="buttons">
                        <button class="btn btn-warning  homeButton buttonStart"><Link params= {{value:"bbb"}} className='link' to='/takmicenja'> Takmičenja</Link></button>
                        <button class="btn btn-warning  homeButton buttonStart"><Link className='link' to='/takmicari'>Takmičari</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;