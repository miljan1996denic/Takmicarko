import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router,Route, Link,BrowserRouter} from 'react-router-dom';
import reducer from '../src/store/reducers';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import Footer from './components/footer';
import Header from '../src/components/header';
import Home from './components/home';



import SingUp from '../src/components/login/SingUp';
import SingIn from '../src/components/login/SingIn';
import Takmicari from '../src/components/takmicari/Takmicari';
import takmicenje from './components/takmicenje/takmicenje';
import ProfAdmin from './components/profAdministator/profAdmin';
import DodajTakmicara from './components/profAdministator/dodajTakmicara';
import Azuriranje from './components/profAdministator/azuriranje';
import OrgTakmicenja from './components/organizatorTakmicenja/orgTakmicenja';
import SuperAdmin from './components/superAdmin/superAdmin';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
    applyMiddleware(promiseMiddleware)
);
sagaMiddleware.run(mySaga);


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
                <Header/>
                <div className="container-fluid">
                   
                    
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/takmicenja" component={takmicenje}></Route>
                        <Route exact path="/takmicari" component={Takmicari}></Route>
                        <Route exact path="/registracija" component={SingUp}></Route>
                        <Route exact path="/logovanje" component={SingIn}></Route>
                        <Route exact path="/profAdministrator" component={ProfAdmin}></Route>
                        <Route exact path="/profAdministrator/dodaj" component={DodajTakmicara}></Route>
                        <Route exact path="/profAdministrator/azuriraj" component={Azuriranje}></Route>
                        <Route exact path="/orgTakmicenja" component={OrgTakmicenja}></Route>
                        <Route exact path="/superAdmin" component={SuperAdmin}></Route>

                </div> 
                <Footer/>
        </div>
    </Router>
    </Provider>
    , document.getElementById('root'));

