import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import Header from './components/Header'
import ResultsPage from './pages/ResultsPage'

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/detay/:id' element={<DetailPage />} />
        <Route path='*' element={<h1>Yol Bulunumadı</h1>} />
        <Route path="/results" element={<ResultsPage />}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App