import React from 'react';
import {PRIMI_TAKMICARE,IZFILTRIRAJ,INPUT_FILTER,PRIMI_PREDMETE} from '../action/index';
import {get} from '../../api';

let initialState=[];
let pomocni=[];

export default function (state=null,action){
    switch(action.type){
        case PRIMI_TAKMICARE:{
            initialState=action.payload;
            return action.payload;
        }
        case INPUT_FILTER:{
            let array = [];
            let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
            for (let i = 0; i < checkboxes.length; i++) {
                array.push(checkboxes[i].value)
            }
            let godina=document.getElementById("godina").value;
            let grad=document.getElementById("grad").value;
            let tip=document.getElementById("tip").value;
            let razred=document.getElementById("razred").value;
             state=initialState;
             let pom=[];
             if(array.length===0){
                 state.forEach(takmicenje=>{
                     if(takmicenje.godina.includes(godina) && takmicenje.grad.includes(grad) && takmicenje.tip.includes(tip) && takmicenje.razred.includes(razred))
                        pom.push(takmicenje);
                 })
             }
             else{
                state.forEach(takmicenje => {
                    array.forEach(predmet => {
                        if(takmicenje.naziv.includes(predmet) && takmicenje.godina.includes(godina) && takmicenje.grad.includes(grad) && takmicenje.tip.includes(tip) && takmicenje.razred.includes(razred))
                                pom.push(takmicenje);
                    });
                });
            }
             let pomNiz=Object.assign({},pom);
             return Object.assign([],pomNiz);
        }
    
        default:
            return state;
    }
}