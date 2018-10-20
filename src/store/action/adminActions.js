export const GET_UCENICI='GET_UCENICI';
export const PRIMI_UCENIKE='PRIMI_UCENIKE';
export const IZBRISI_UCENIKA='IZBRISI_UCENIKA';
export const POST_TAKMICAR='POST_TAKMICAR';
export const GET_SKOLE='GET_SKOLE';
export const PRIMI_SKOLE='PRIMI_SKOLE';
export const UPDATE_TAKMICAR='UPDATE_TAKMICAR';
export const SEARCH_STUDENT='SEARCH_STUDENT';
export const GET_ALL_UCENICI='GET_ALL_UCENICI';

export function povuciUcenike(admin){
    if(admin.role==="1"){
        return {
            type: GET_ALL_UCENICI
        } 
    }
    return {
        type: GET_UCENICI,
        payload: admin.skolaID
    }
}
export function PrimiUcenike(ucenici){
    return{
        type: PRIMI_UCENIKE,
        payload:ucenici
    }
}
export function izbrisiUcenika(id,admin){
    return{
        type:IZBRISI_UCENIKA,
        id: id,
        payload:admin.skolaID,
        role:admin.role
    }
}
export function postTakmicar(admin){
    console.log("Uso u post akciju",admin)
    return{
        type:POST_TAKMICAR,
        payload:admin.skolaID,
        role:admin.role
    }
}
export function getSkole(){
    return{
        type:GET_SKOLE
    }
}
export function PrimiSkole(skole){
    return{
        type: PRIMI_SKOLE,
        payload:skole
    }
}
export function updateTakmciar(admin){
    return{
        type:UPDATE_TAKMICAR,
        payload:admin.skolaID,
        role:admin.role
    }
}
export function searchStudent(event){
    return{
        type:SEARCH_STUDENT,
        payload:event.target.value
    }
}