import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getIn } from 'timm'
import Categories from './components/Categories'
import NewsCard from './components/NewsCard'
import Search from './components/Search'
import { Box, Spacer } from './utils'
import { useDebouncedCallback } from './helpers'

import { getNewsEndPoint, getApiKey } from './config'

function App() {
    const [category, setCategory] = useState([
        {
            name: 'TechCrunch',
            api: 'https://newsapi.org/v2/top-headlines?category=technology',
            isActive: true,
        },
    ])
    const [data, setData] = useState([])
    const addNewCategory = (newCategory) => {
        setCategory([...category, newCategory])
    }
    useEffect(() => {
        async function fetchNewsWithTag() {
            const activeTag = category.filter((cat) => cat.isActive === true)
            const activeUrl = getIn(activeTag, [0, 'api']) || ''
            const { data } = await axios.get(activeUrl, {
                params: {
                    apiKey: getApiKey(),
                },
            })
            setData(getIn(data, ['articles']) || [])
        }

        fetchNewsWithTag()
    }, [category])

    const fetchNews = async (query) => {
        const { data } = await axios.get(`${getNewsEndPoint()}/everything`, {
            params: {
                q: query,
                apiKey: getApiKey(),
            },
        })
        setData(getIn(data, ['articles']) || [])
    }

    const onSearch = useDebouncedCallback((query) => {
        fetchNews(query)
    }, 800)

    const onSelected = (index) => {
        const updatedCategory = category.map((cat, _index) => ({
            ...cat,
            isActive: index === _index ? true : false,
        }))
        setCategory(updatedCategory)
    }

    return (
        <Box center>
            <Box style={{ width: '90%', maxWidth: '670px' }}>
                <Categories
                    key={category}
                    category={category}
                    onChange={addNewCategory}
                    onSelected={onSelected}
                />
                <Spacer size={20} />

                <Search onSearch={onSearch} />
                <Spacer size={14} />
                <NewsCard key={data} data={data} />
            </Box>
        </Box>
    )
}

export default App
