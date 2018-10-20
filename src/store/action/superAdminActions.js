export const GET_NEODOBRENE_ORG='GET_NEODOBRENE_ORG';
export const POVUCI_REGISTROVANE='POVUCI_REGISTROVANE';
export const PRIMI_REGISTROVANE='PRIMI_REGISTROVANE';
export const IZBRISI_ADMINISTRATORA='IZBRISI_ADMINISTRATORA';
export const FILTRIRAJ='FILTRIRAJ';

export function getNeodobreneOrg(){
    return{
        type:GET_NEODOBRENE_ORG
    }
}

export function povuciRegistrovane(){
    return{
        type:POVUCI_REGISTROVANE
    }
}
export function primiRegistrovane(registrovani){
    return{
        type:PRIMI_REGISTROVANE,
        payload:registrovani
    }
}
export function izbrisiAdministratora(id){
    return{
        type:IZBRISI_ADMINISTRATORA,
        payload:id
    }
}
export function filtriraj(){
    return{
        type:FILTRIRAJ
    }
}