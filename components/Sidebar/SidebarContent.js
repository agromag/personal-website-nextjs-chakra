import { Box, Text } from "@chakra-ui/react";
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
            <Text color="#fff" fontWeight={'bold'} textTransform={'uppercase'} fontSize={20}> Documentation </Text>
                <SearchInput setInput={setSearchInput}/>
        </Box>
        <DropDownList data={filteredMenuItems} />
        </Box>
    )
}

export default SidebarContent;