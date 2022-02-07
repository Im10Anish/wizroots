import React from 'react'
import { Search as SearchIcon } from 'grommet-icons'
import { TextInput } from 'grommet'

const Search = () => {
    return (
        <>
            <TextInput
                icon={<SearchIcon />}
                placeholder="Search for keywords, author"
                style={{
                    borderRadius: '20px',
                    boxShadow: '0px 0px 16px #00000010',
                    fontSize: '14px',
                    background: '#ffffff',
                    fontWeight: 400,
                    border: '1px solid #E5E5E5',
                }}
            />
        </>
    )
}

export default Search
