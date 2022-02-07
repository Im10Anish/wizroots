import React from 'react'
import Categories from './components/Categories'
import NewsCard from './components/NewsCard'
import Search from './components/Search'
import { Box, Spacer } from './utils'

function App() {
    return (
        <Box center>
            <Box width={670}>
                <Categories />
                <Spacer size={10} />
                <NewsCard />
                <Spacer size={10} />

                <Search />
            </Box>
        </Box>
    )
}

export default App
