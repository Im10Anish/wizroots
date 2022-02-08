import React, { useState } from 'react'
import { Layer } from 'grommet'

import { Box, ModalBox, Spacer, Title, Pills, Button, Input } from '../utils'

const Categories = ({ category, onChange, onSelected }) => {
    const [newCategory, setNewCategory] = useState('')
    const [newAPI, setNewAPI] = useState('')
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            {open && (
                <Layer
                    position="center"
                    modal
                    onClickOutside={handleClose}
                    onEsc={handleClose}
                >
                    <ModalBox>
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
                                onChange({
                                    name: newCategory,
                                    api: newAPI,
                                    isActive: false,
                                })
                                handleClose()
                            }}
                        >
                            + Add
                        </Button>
                    </ModalBox>
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
                                onClick={() => onSelected(index)}
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
