import React from 'react';
import {PRIMI_REGISTROVANE,FILTRIRAJ} from '../action/superAdminActions';

let initialState=[]
export default function (state=null,action){
    switch(action.type){
        case PRIMI_REGISTROVANE:{
            initialState=action.payload;
            return action.payload
        }
        case FILTRIRAJ:{
            let radios = document.getElementsByName('filter')
            let admRole=null;
            radios.forEach(radio=>{
                if(radio.checked===true)
                admRole=radio.value;
            })
            let pom=initialState;
            let novi=pom.filter(element=>element.role.includes(admRole));
            return Object.assign([],novi);
        }
        default:
            return state;
    }
}