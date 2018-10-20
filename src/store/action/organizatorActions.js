export const POST_TAKMICENJE='POST_TAKMICENJE';
export const TAKMICENJA_BY_ORG='TAKMICENJA_BY_ORG';
export const IZBRISI_TAKMICENJE='IZBRISI_TAKMICENJE';
export const UPDATE_TAKMICENJE='UPDATE_TAKMICENJE';
export const GET_REGISTRACIJA='GET_REGISTRACIJA';
export const IZBRISI_REGISTROVANOG='IZBRISI_REGISTROVANOG';
export const PRIMI_NEODOBRENE='PRIMI_NEODOBRENE';
export const POTVRDI_NEODOBRENOG='POTVRDI_NEODOBRENOG'
export const DODAJ_REZULTAT='DODAJ_REZULTAT';
export const TABELA_TAKMICAR='TABELA_TAKMICAR';

export function PostTakmicenje(admin){
    return{
        type: POST_TAKMICENJE,
        payload:admin.id,
        role:admin.role
    }
}
export function TakmicenjaByOrg(admin){
    return{
        type:TAKMICENJA_BY_ORG,
        payload:admin.id,
        role:admin.role
    }
}
export function izbrisiTakmicenje(idTakmicenja,idOrg){
    return{
        type:IZBRISI_TAKMICENJE,
        payload:idOrg.id,
        idTakmicenja:idTakmicenja,
        role:idOrg.role
    }
}
export function updateTakmicenje(admin){
    return{
        type:UPDATE_TAKMICENJE,
        payload:admin.id,
        role:admin.role
    }
}
export function getRegistracija() {
    return{
      type: GET_REGISTRACIJA
    }
  }
export function izbrisiRegistrovanog(id){
    return{
        type:IZBRISI_REGISTROVANOG,
        payload:id
    }
}
export function primiNeodobrene(neodobreni){
    return{
        type:PRIMI_NEODOBRENE,
        payload:neodobreni
    }
}
export function potvrdiNeodobrenog(id){
    return{
        type:POTVRDI_NEODOBRENOG,
        payload:id
    }
}
export function izTabeleTakmicar(){
    return{
        type:TABELA_TAKMICAR
    }
}