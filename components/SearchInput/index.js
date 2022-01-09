import React, { useState } from 'react'
import {
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = ({ setInput }) => {


    return (
        <InputGroup mb={4} mr={4} w="100%" mt={10}>
            <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setInput(e.target.value)}
                style={{ border: 'none', backgroundColor: '#fff', color: '#000', outline: 'none' }}
                
            />
            <InputLeftElement>
                <SearchIcon color="gray.300" />
            </InputLeftElement>
        </InputGroup>
    )
}

export default SearchInput;