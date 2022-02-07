import React from 'react'
import Categories from './components/Categories'
import NewsCard from './components/NewsCard'
import Search from './components/Search'
import { Box, Spacer } from './utils'

function App() {
    return (
        <Box row>
            <Categories />
            <Spacer size={10} />
            <NewsCard />
            <Spacer size={10} />

            <Search />
        </Box>
    )
}

export default App
