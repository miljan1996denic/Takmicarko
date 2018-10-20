import React from 'react';
import {PRIMI_PREDMETE} from '../action/index';

export default function (state=null,action){
    switch(action.type){
        case PRIMI_PREDMETE:{
            return action.payload
        }
        default:
            return state;
    }
}