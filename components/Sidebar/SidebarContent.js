import { Box, Text, Flex, Link } from "@chakra-ui/react";
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
            <Link href='/' style={{textDecoration: 'none'}}>
                <Flex alignItems="center">
                    
                    <img src={'/images/core/logo.png'} width="30"/>
                   <Text color="#fff" fontWeight={'bold'} textTransform={'uppercase'} fontSize={20} ml={4}> Fiki </Text>
                    
                
                    </Flex>
                    </Link>
                <SearchInput setInput={setSearchInput}/>
        </Box>
        <DropDownList data={filteredMenuItems} />
        </Box>
    )
}

export default SidebarContent;