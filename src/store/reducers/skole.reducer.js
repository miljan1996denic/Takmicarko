import React from 'react';
import {PRIMI_SKOLE} from '../action/adminActions';

export default function (state=null,action){
    switch(action.type){
        case PRIMI_SKOLE:{
            return action.payload
        }
        default:
            return state;
    }
}