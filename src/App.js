import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from './components'
const App = () => {
  return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000'}}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Feed />} />
                    <Route path="/video/:id"  elements={<VideoDetail />} />
                    <Route path="/channel/:id"  elements={<ChannelDetail />} />
                    <Route path="/search/:searchTerm"  elements={<SearchFeed />} />

                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App