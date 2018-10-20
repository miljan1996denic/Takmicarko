import {PRIMI_UCENIKE, SEARCH_STUDENT} from '../action/adminActions';

let initialState= [];

export default function (state=[],action){
    switch(action.type){
        case PRIMI_UCENIKE:{
            initialState=action.payload;
            return action.payload;
        }
        case SEARCH_STUDENT:{
            state=initialState;
            const ime=action.payload;
            const obj=Object.assign({},state.filter(ucenik=>
                 ucenik.ime.concat(" ").concat(ucenik.prezime).toUpperCase().includes(ime.toUpperCase())
            ));
            return Object.assign([],obj);
        }
        default:
            return state;
    }
}