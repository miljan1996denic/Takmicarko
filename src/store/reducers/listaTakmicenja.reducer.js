import React from 'react';
import {PRIMI_LISTU_TAKMICENJA, UCITAJ_LISTU_TAKMICENJA} from '../action/index';
import {get} from '../../api';

let initialState=[];

export default function (state=null,action){

    switch(action.type){

        case PRIMI_LISTU_TAKMICENJA:{
            state=action.payload;
            return state;
        }
       
        default:
            return state;
    }
}