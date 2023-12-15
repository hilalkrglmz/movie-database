import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseImageURL, options } from '../constants/constant'
import Loading from '../components/Loading'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import millify from 'millify'


axios.baseImageURL = 'https://api.themoviedb.org/3';
const DetailPage = () => {
  /* filmin id sine erişim */
  const { id } = useParams()

  /* filmin verileri */
  const [movie, setMovie] = useState(null)
  /* oyuncu verileri */
  const [cast, setCast] = useState(null)

  useEffect(() => {
    /* filmin temel bilgiler */
    axios
      .get(`/movie/${id}`, options)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))

    /* filmdeki kişilerin bilgileri */
    axios
      .get(`/movie/${id}/credits`, options)
      .then((res) => setCast(res.data.cast))
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className='row'>

      {!movie ? (<Loading />)
        : (
          <>
            <div className='col-12 banner'>
              <img className='w-100 h-100 object-fit-cover' src={baseImageURL.concat(movie.poster_path)} />
              <div className='banner-bg'>
                <span>{movie.title}</span>
              </div>

            </div>

            {/* KİŞİLER */}
            

            {/* sol taraf */}
            <div className='col-md-6 mt-4 p-4'>
              {/* ŞİRKETLER */}
              <h3>Yapımcı Şirketler</h3>
              <div className='d-flex flex-wrap gap-4'>
                {movie.production_companies.map((comp) => (
                  <div className='bg-white rounded p-2'>
                    {comp.logo_path ?
                      (<img
                        className='object-fit-contain mt-2'
                        title={comp.name}
                        width={100}
                        height={50}
                        src={baseImageURL.concat(comp.logo_path)} />)
                      :
                      <p
                        className='text-black  fw-bold text-center'
                        style={{ width: '100px', fontSize: '14px', marginTop: '10px' }}>{comp.name}</p>
                    }
                  </div>
                ))}
              </div>
              {/* DİLLER  */}
              <h3 className='mt-4'>Konuşulan Diller</h3>
              <div className='d-flex flex-wrap gap-4'>
                {movie.spoken_languages.map((lang) => (
                  <div className='bg-white rounded p-1 text-black'>
                    <span>{lang.english_name}</span>
                  </div>
                ))}
              </div>
              {/* ÜLKELER  */}
              <h3 className='mt-4'>Yapımcı Ülkeler</h3>
              <div className='d-flex flex-wrap gap-4'>
                {movie.production_countries.map((country) => (
                  <div className='bg-white rounded p-1 text-black fw-bold'>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>

               {/* DİLLER  */}
               <h3 className='mt-4'>Kategori</h3>
              <div className='d-flex flex-wrap gap-4'>
                {movie.genres.map((genre) => (
                  <div className='bg-white rounded p-1 text-black'>
                    <span className='btn btn-danger fw-bold'>{genre.name}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* sağ taraf */}
            <div className='col-md-6 mt-4 p-4'>
              <p>Gösterim tarihi: <span className='fw-bold'>{movie.release_date}</span></p>
              <p>{movie.overview}</p>
              <p>Bütçe: <span className='fw-bold'>{millify(movie.budget)}</span></p>
              <p>Gelir: <span className='fw-bold'>{millify(movie.revenue)}</span></p>
              <p>Süre: <span className='fw-bold'>{movie.runtime}</span></p>
              <p>Oy oranı: <span className='fw-bold'>{movie.vote_average}/10</span></p>
            </div>

            <div className="col-12 p-4 my-2">
              <h2>Oyuncu Kadrosu</h2>
              <Splide 
              options={{
                gap:'10px',
                pagination: false,//alttaki noktalı yapıyı kaldırdık.
                autoWidth: true, //ekrana sığdığı kadar eleman sığdırdık.
                autoHeight:true
              }}

              >
                {cast?.map((act) => (
                  <SplideSlide key={act.cast_id}>
                      <div className='act-card h-100'>
                      <img 
                      style={{width:'200px', cursor:'pointer'}}
                      src={baseImageURL.concat(act.profile_path)} />
                      <p><span>{act.name}</span></p>
                      </div>
                      
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </>


        )}


    </div>
  )
}

export default DetailPage;