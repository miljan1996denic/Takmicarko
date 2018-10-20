import React from 'react';
import { PRIMI_NEODOBRENE } from '../action/organizatorActions';

export default function (state=null,action){
    switch(action.type){
        case PRIMI_NEODOBRENE:{
            return action.payload
        }
        default:
            return state;
    }
}