import React from 'react'
import {Routes,Route} from "react-router-dom"
import EntryPage from './Pages/EntryPage/EntryPage'
import BuyPage from './Pages/BuyPage/BuyPage'
import Feed from './Pages/Feed/Feed'
import Login from './Pages/LoginPage/Login';
import ParticipantRanking from './Pages/ParticipantRanking/ParticipantRanking'
import UserPortfolio from './Pages/UserPortfolio/UserPortfolio'
import Portfolio from './Pages/Portfolios/Portfolio'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/BuyPage" element={<BuyPage />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ParticipantRanking" element={<ParticipantRanking />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path = "/UserPortfolio" element = {<UserPortfolio/>}  ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes;