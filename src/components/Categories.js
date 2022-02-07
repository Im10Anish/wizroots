import React from 'react'
import { Box, Spacer, Title, Pills } from '../utils'

const categoriesInfo = [
    { name: 'TechCrunch', api: '', isActive: true },
    { name: 'Business', api: '', isActive: false },
    { name: 'Wall Street Journal', api: '', isActive: false },
]
const Categories = () => {
    return (
        <>
            <Spacer size={40} />
            <Title>News Today</Title>
            <Box row>
                {categoriesInfo.map((category) => {
                    return (
                        <>
                            <Pills active={category.isActive}>
                                {category.name}
                            </Pills>
                            <Spacer size={10} />
                        </>
                    )
                })}
                {categoriesInfo.length < 5 && <>hell</>}
            </Box>
        </>
    )
}

export default Categories
