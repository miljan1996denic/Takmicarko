export const UCITAJ_TAKMICENJE='UCITAJ_TAKMICENJE';
export const PRIMI_TAKMICARE='PRIMI_TAKMICARE';
export const IZFILTRIRAJ='IZFILTRIRAJ';
export const INPUT_FILTER='INPUT_FILTER';
export const GET_PREDMETI='GET_PREDMETI';
export const PRIMI_PREDMETE='PRIMI_PREDMETE';
export const UCITAJ_LISTU_TAKMICENJA='UCITAJ_LISTU_TAKMICENJA';
export const PRIMI_LISTU_TAKMICENJA='PRIMI_LISTU_TAKMICENJA';
export const UCITAJ_LISTU_TAKMICARA='UCITAJ_LISTU_TAKMICARA';
export const PRIMI_LISTU_TAKMICARA='PRIMI_LISTU_TAKMICARA';


export function ucitajTakmicenja(){
    return {
        type: UCITAJ_TAKMICENJE
    }
}
export function primiTakmicenja(takmicenja){
    return {
        type: PRIMI_TAKMICARE,
        payload:takmicenja
    }
}
export function inputFilteri(){
    return {
        type: INPUT_FILTER
    }
}
export function filtrirajNiz(predmet){
    return {
        type: IZFILTRIRAJ,
        payload:predmet
    }
}
export function getPredmeti(){
    return {
        type: GET_PREDMETI
    }
}
export function PrimiPredmete(predmeti){
    return{
        type: PRIMI_PREDMETE,
        payload:predmeti
    }
}
export function primiListuTakmicenja(takmicenja){
    return {
        type: PRIMI_LISTU_TAKMICENJA,
        payload:takmicenja
    }
}
export function ucitajListuTakmicenja(id){
    return {
        
        type: UCITAJ_LISTU_TAKMICENJA,
        payload:id
    }
}
export function primiListuTakmicara(takmicenja){
    return {
        type: PRIMI_LISTU_TAKMICARA,
        payload:takmicenja
    }
}
export function ucitajListuZaTakmicara(id){
    return {
        
        type: UCITAJ_LISTU_TAKMICARA,
        payload:id
    }
}