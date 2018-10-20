import React from 'react';
import {PRIMI_LISTU_TAKMICARA, UCITAJ_LISTU_TAKMICARA} from '../action/index';
import {get} from '../../api';

let initialState=[];

export default function (state=null,action){

    switch(action.type){

        case PRIMI_LISTU_TAKMICARA:{
            state=action.payload;
            return state;
        }
       
        default:
            return state;
    }
}