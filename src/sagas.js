import { call, put, takeLatest } from 'redux-saga/effects'
import {getTakmicenja, getPredmeti,getSpecUcenici,izbrisiTakmicara, postTakmicar,
  GetTakmicenjaByOrgDB, getSkole, updateTakmicar,PostTakmicenje,izbrisiTakmicenje,
  UpdateTakmicenje,getAllUcenici,getNeodobreneOrgan,Registrovani,
  izbrisiRegistrovanog,GetRegistrovane,potvrdiProfesoraAdministratora,getListaTakmicenja, getListaZaTakmicara} from '../src/api';
import {UCITAJ_TAKMICENJE,primiTakmicenja, GET_PREDMETI, PrimiPredmete,primiListuTakmicenja,primiListuTakmicara, UCITAJ_LISTU_TAKMICARA,UCITAJ_LISTU_TAKMICENJA } from '../src/store/action';
import { GET_UCENICI,PrimiUcenike, IZBRISI_UCENIKA,POST_TAKMICAR,
   GET_SKOLE,PrimiSkole, UPDATE_TAKMICAR,GET_ALL_UCENICI } from './store/action/adminActions';
import { POST_TAKMICENJE, TAKMICENJA_BY_ORG, IZBRISI_TAKMICENJE, UPDATE_TAKMICENJE, IZBRISI_REGISTROVANOG, GET_REGISTRACIJA, POTVRDI_NEODOBRENOG } from './store/action/organizatorActions';
import {primiNeodobrene,TABELA_TAKMICAR} from  './store/action/organizatorActions';
import {GET_NEODOBRENE_ORG,POVUCI_REGISTROVANE, primiRegistrovane,IZBRISI_ADMINISTRATORA} from './store/action/superAdminActions';


function* listaTakmicenja(action) {
 try {
    const listaTakmicenja = yield call(getListaTakmicenja,action.payload);
    yield put(primiListuTakmicenja(listaTakmicenja));
 } catch (e) {
   console.log(e);
 }
}
function* listaTakmicara(action) {
 try {
    const listaTakmicara = yield call(getListaZaTakmicara,action.payload);
    yield put(primiListuTakmicara(listaTakmicara));
 } catch (e) {
  console.log(e);
 }
}


function* GetFromJSON() {
    try {
       const takmicenja = yield call(getTakmicenja);
       yield put(primiTakmicenja(takmicenja));
    } catch (e) {
      console.log(e);
    }
 }

 function* getPredmetiFromDB() {
    try {
      const predmeti = yield call(getPredmeti);
      yield put(PrimiPredmete(predmeti));
  } catch (e) {
    console.log(e);
  }
 }

 function* getSpecUceniciFromDB(action){
      try {
        const ucenici = yield call(getSpecUcenici,action.payload);
        yield put(PrimiUcenike(ucenici));
    } catch (e) {
      console.log(e);
    }
 }
function* deleteTakmicarFromDB(action){
      try {
        yield call(izbrisiTakmicara,action.id);
        let ucenici=null;
        if(action.role==="1"){
          ucenici = yield call(getAllUcenici)
        }
        else{
          ucenici = yield call(getSpecUceniciFromDB,action)
        }
        yield put(PrimiUcenike(ucenici));
    } catch (e) {
      console.log(e);
}
}
function* postujTakmciara(action){
  try {
    yield call(postTakmicar);
    let ucenici=null;
    if(action.role==="1"){
      ucenici = yield call(getAllUcenici)
    }
    else{
      ucenici = yield call(getSpecUceniciFromDB,action)
    }
    yield put(PrimiUcenike(ucenici));
} catch (e) {
  console.log(e);
}
}
function* getSveSkole(){
  try {
    const skole = yield call(getSkole);
    yield put(PrimiSkole(skole));
} catch (e) {
}
}
function* updateTakmicara(action){
  try {
    yield call(updateTakmicar);
    let ucenici=null;
    if(action.role==="1"){
      ucenici = yield call(getAllUcenici)
    }
    else{
      ucenici = yield call(getSpecUceniciFromDB,action)
    }
    yield put(PrimiUcenike(ucenici));
} catch (e) {
  console.log(e);
}
}

function* PostujTakmicenje(action){
    try {
      yield call(PostTakmicenje,action.payload);
      let takmicenja=null;
      if(action.role==="1"){
        takmicenja = yield call(getTakmicenja)
      }
      else{
         takmicenja = yield call(GetTakmicenjaByOrgDB,action.payload);
      }
      yield put(primiTakmicenja(takmicenja));
  } catch (e) {
    console.log(e);
  }
}

function* GetTakmicenjaByOrg(action){
    try {
      let takmicenja=null;
    if(action.role==="1"){
      takmicenja = yield call(getTakmicenja)
    }
    else{
       takmicenja = yield call(GetTakmicenjaByOrgDB,action.payload);
    }
      // const takmicenja = yield call(GetTakmicenjaByOrgDB,action.payload);
      yield put(primiTakmicenja(takmicenja));
  } catch (e) {
    console.log(e);
  }
}

function* izbrisiTakmicenjeDB(action){
  try {
    yield call(izbrisiTakmicenje,action.idTakmicenja);
    let takmicenja=null;
    if(action.role==="1"){
      takmicenja = yield call(getTakmicenja)
    }
    else{
       takmicenja = yield call(GetTakmicenjaByOrgDB,action.payload);
    }
    yield put(primiTakmicenja(takmicenja));
} catch (e) {
  console.log(e);
}
}

function* updateTakmicenjeDB(action){
  try {
    yield call(UpdateTakmicenje);
    let takmicenja=null;
    if(action.role==="1"){
      takmicenja = yield call(getTakmicenja)
    }
    else{
       takmicenja = yield call(GetTakmicenjaByOrgDB,action.payload);
    }
    yield put(primiTakmicenja(takmicenja));
} catch (e) {
  console.log(e);
}
}
function* GetNeodobrene(){
  try {
    const neodobreni = yield call(GetRegistrovane);
    yield put(primiNeodobrene(neodobreni));
} catch (e) {
  console.log(e);
}
}
function* izbrisiNeodobrenog(action){
  try {
    yield call(izbrisiRegistrovanog,action.payload);
    const neodobreni = yield call(GetRegistrovane)
    yield put(primiNeodobrene(neodobreni));
} catch (e) {
  console.log(e);
}
}
function* izvrsiPotvrdjivanje(action){
    try {
      yield call(potvrdiProfesoraAdministratora,action.payload);
      const neodobreni = yield call(GetRegistrovane)
      yield put(primiNeodobrene(neodobreni));
  } catch (e) {
    console.log(e);
  }
}
function* povuciUcenike(){
  try {
    const ucenici = yield call(getAllUcenici);
    yield put(PrimiUcenike(ucenici));
} catch (e) {
  console.log(e);
}
}

function* getNeodobreneOrganizatore(){
  try {
    const organizatori = yield call(getNeodobreneOrgan);
    yield put(primiNeodobrene(organizatori));
} catch (e) {
  console.log(e);
}
}

function* povuciSveRegistrovane(){
  try {
    const registrovani = yield call(Registrovani);
    yield put(primiRegistrovane(registrovani));
} catch (e) {
  console.log(e);
}
}

function* izbrisiAdmina(action){
  try {
    yield call(izbrisiRegistrovanog,action.payload);
    const registrovani = yield call(Registrovani)
    yield put(primiRegistrovane(registrovani));
} catch (e) {
  console.log(e);
}
}

 export default function* mySaga() {
    yield takeLatest(UCITAJ_TAKMICENJE, GetFromJSON);
    yield takeLatest(GET_PREDMETI,getPredmetiFromDB);
    yield takeLatest(GET_UCENICI,getSpecUceniciFromDB);
    yield takeLatest(IZBRISI_UCENIKA,deleteTakmicarFromDB);
    yield takeLatest(POST_TAKMICAR,postujTakmciara);
    yield takeLatest(GET_SKOLE,getSveSkole);
    yield takeLatest(UPDATE_TAKMICAR,updateTakmicara);
    yield takeLatest(POST_TAKMICENJE,PostujTakmicenje);
    yield takeLatest(TAKMICENJA_BY_ORG,GetTakmicenjaByOrg);
    yield takeLatest(IZBRISI_TAKMICENJE,izbrisiTakmicenjeDB);
    yield takeLatest(UPDATE_TAKMICENJE,updateTakmicenjeDB);
    yield takeLatest(GET_REGISTRACIJA,GetNeodobrene);
    yield takeLatest(IZBRISI_REGISTROVANOG,izbrisiNeodobrenog);
    yield takeLatest(POTVRDI_NEODOBRENOG,izvrsiPotvrdjivanje);
    yield takeLatest(GET_ALL_UCENICI,povuciUcenike);
    yield takeLatest(GET_NEODOBRENE_ORG,getNeodobreneOrganizatore);
    yield takeLatest(POVUCI_REGISTROVANE,povuciSveRegistrovane);
    yield takeLatest(IZBRISI_ADMINISTRATORA,izbrisiAdmina);
    yield takeLatest(UCITAJ_LISTU_TAKMICENJA, listaTakmicenja);
    yield takeLatest(UCITAJ_LISTU_TAKMICARA,listaTakmicara);
    yield takeLatest(TABELA_TAKMICAR,povuciUcenike);

  }
  