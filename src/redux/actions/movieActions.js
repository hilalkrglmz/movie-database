import axios from "axios"
import { options } from "../../constants/constant"
import { actionTypes } from "../actionTypes"


axios.defaults.baseURL= 'https://api.themoviedb.org/3'

//*popüler filmleri alıp store a aktaracak 

export const getPopular = () => (dispatch) => {
    axios.get('/movie/popular' ,options)
    .then((res) => dispatch({
        type:actionTypes.SET_MOVIES, 
        payload:res.data.results}))
    .catch((err) => dispatch({type:actionTypes.SET_MOVIES_ERROR}))
}

//*TÜR BİLGİLERİNİ AL STORE A AKTAR
export const getGenres = () => (dispatch) => {
    axios
    .get('/genre/movie/list?language=en', options)
    //API DEN OLUMLU CEVAP GELIRSE TURLERI STORE A AKTAR
    .then((res) => dispatch({type: actionTypes.SET_GENRES, payload:res.data.genres}))

    //APIDEN OLUMSUZ CEVAP GELIRSE STORE U BILGILENDIR.
    .catch((err) => dispatch({type: actionTypes.SET_GENRES_ERROR}) )
}  