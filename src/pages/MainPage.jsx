import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getPopular } from '../redux/actions/movieActions'
import { actionTypes } from '../redux/actionTypes'
import Loading from '../components/Loading'
import MovieList from '../components/MovieList'

const MainPage = () => {

  const dispatch =useDispatch()
  const state = useSelector((store) => store);

useEffect(() => {

//*filmler için loading state ini aktif eder
  dispatch({type:actionTypes.SET_MOVIES_LOADING})
  //*popüler filmleri alıp store a aktaracak
dispatch(getPopular())


  //*türleri al
  dispatch({type: actionTypes.SET_GENRES_LOADING})
  dispatch(getGenres())


} ,[])

  return (
    <div>
      {/* Karşılama component */}
      <Hero/>

      {/*Her bir kategori için ekrana o kategorinin filmlerini basacak bileşeni render larız. */}


    {/* ÖNCE YÜKLENİYOR MU KONTROL ET YÜKLENİYORSA LOADING BAS */}
      {state.isGenresLoading ? (<Loading/>) :

     /* YÜKLENME BİTTİYSE HATA VAR MI KONTROL ET */ 
      state.isGenresError ? (<p>Üzgünüz hata oluştu</p>) :

     /* HATA DA YOKSA KATEGORİLERİ BAS */ 
     ( state.genres.map((genre) => <MovieList key={genre.id} genre={genre}/>)
     )}

    </div>
  )
}

export default MainPage