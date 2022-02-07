import React, { useState } from 'react'
import { Layer } from 'grommet'

import { Box, Spacer, Title, Pills, Button, Input } from '../utils'

const Categories = () => {
    const [category, setCategory] = useState([
        { name: 'TechCrunch', api: '', isActive: true },
    ])
    const [newCategory, setNewCategory] = useState('')
    const [newAPI, setNewAPI] = useState('')
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onSlected = (index) => {
        const updatedCategory = category.map((cat) => ({
            ...cat,
            isActive: !cat.isActive,
        }))
        setCategory(updatedCategory)
    }

    const addNewCategory = (newCategory) => {
        setCategory([...category, newCategory])
    }
    return (
        <>
            {open && (
                <Layer
                    position="center"
                    modal
                    onClickOutside={handleClose}
                    onEsc={handleClose}
                >
                    <Box
                        padding={64}
                        width={690}
                        style={{ background: '#fff' }}
                    >
                        <Title small>Add Category</Title>
                        <Spacer size={40} />

                        <Input
                            name="name"
                            placeholder="Category Name"
                            value={newCategory}
                            id="name"
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <Spacer size={40} />
                        <Input
                            name="api"
                            placeholder="API URL"
                            value={newAPI}
                            id="api"
                            onChange={(e) => setNewAPI(e.target.value)}
                        />
                        <Spacer size={40} />
                        <Button
                            disabled={!(newCategory && newAPI)}
                            onClick={() => {
                                addNewCategory({
                                    name: newCategory,
                                    api: newAPI,
                                    isActive: false,
                                })
                                handleClose()
                            }}
                        >
                            + Add
                        </Button>
                    </Box>
                </Layer>
            )}
            <Spacer size={20} />
            <Title>News Today</Title>
            <Spacer size={20} />

            <Box row>
                {category.map((category, index) => {
                    return (
                        <>
                            <Pills
                                active={category.isActive}
                                key={index}
                                onClick={() => onSlected(index)}
                            >
                                {category.name}
                            </Pills>
                            <Spacer size={10} />
                        </>
                    )
                })}
                {category.length < 5 && (
                    <Button secondary onClick={handleOpen}>
                        +
                    </Button>
                )}
            </Box>
        </>
    )
}

export default Categories
