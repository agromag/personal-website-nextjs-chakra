import { Box, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import DropDownList from "../Dropdown";
import SearchInput from "../SearchInput";


const SidebarContent = ({ menuContent }) => {

    const [searchInput, setSearchInput] = useState('')

    const filteredMenuItems = menuContent.filter(item => item.title.toLowerCase().includes(searchInput))

    return (

    <Box
        style={{ maxHeight: '100%', overflowY: 'scroll' }}
        css={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
    >
            <Box>
            
                <Flex alignItems="center">
                <img src={'/images/core/logo.png'} width="30"/>
                <Text color="#fff" fontWeight={'bold'} textTransform={'uppercase'} fontSize={20} ml={4}> Fiki </Text>
                
                </Flex>
                <SearchInput setInput={setSearchInput}/>
        </Box>
        <DropDownList data={filteredMenuItems} />
        </Box>
    )
}

export default SidebarContent;