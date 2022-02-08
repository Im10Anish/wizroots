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

    // Add new category to the list and make isActive false for previous items
    const addNewCategory = (newCategory) => {
        const previousCategory = category.map((cat, _index) => ({
            ...cat,
            isActive: false,
        }))
        setCategory([...previousCategory, newCategory])
    }

    // load data with default category ie. technology
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

    // Search the query gets from the user-input
    const fetchNews = async (query) => {
        const { data } = await axios.get(`${getNewsEndPoint()}/everything`, {
            params: {
                q: query,
                apiKey: getApiKey(),
            },
        })
        setData(getIn(data, ['articles']) || [])
    }

    // using debounce to avoid unnecessary calls
    const onSearch = useDebouncedCallback((query) => {
        fetchNews(query)
    }, 800)

    // Make the selected tab active
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
