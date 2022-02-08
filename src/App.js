import React, { useState } from 'react'
import Categories from './components/Categories'
import NewsCard from './components/NewsCard'
import Search from './components/Search'
import { Box, Spacer } from './utils'

import { getNewsEndPoint, getApiKey } from './config'

function App() {
    const { data, setData } = useState([])
    const onSearch = (query) => {}

    return (
        <Box center>
            <Box style={{ width: '90%', maxWidth: '670px' }}>
                <Categories />
                <Spacer size={20} />

                <Search onSearch={onSearch} />
                <Spacer size={14} />
                <NewsCard />
            </Box>
        </Box>
    )
}

export default App
