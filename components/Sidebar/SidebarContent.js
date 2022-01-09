import { Button, VStack, Box, Text } from "@chakra-ui/react";
import DropDownList from "../Dropdown";
import SearchInput from "../SearchInput";
import { getAllFilesFrontMatter } from '../../lib/mdx'


const SidebarContent = ({ menuContent }) => (
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
            <SearchInput />
        </Box>
        <DropDownList data={ menuContent } />
    </Box>
)

export default SidebarContent;