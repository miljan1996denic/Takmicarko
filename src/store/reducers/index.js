import {combineReducers} from 'redux';
import Takmicenja from '../reducers/takmicenja.reducer';
import takmicari from '../reducers/takmicari_reducer';
import predmeti from '../reducers/predmeti.reducer';
import ucenici from '../reducers/Ucenici';
import skole from '../reducers/skole.reducer';
import listaTakmicenja from '../reducers/listaTakmicenja.reducer';
import listaZaTakmicara from '../reducers/listaZaTakmicara.reducer';
import neodobreni from '../reducers/neodobreni.reducer';
import registrovani from '../reducers/registrovani.reducer';

const rootReducer=combineReducers({
    Takmicenja: Takmicenja,
    takmicari:takmicari,
    predmeti:predmeti,
    ucenici:ucenici,
    skole:skole,
    listaTakmicenja:listaTakmicenja,
    listaZaTakmicara:listaZaTakmicara,
    neodobreni:neodobreni,
    registrovani:registrovani
})

export default rootReducer;