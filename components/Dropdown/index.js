import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import DropdownElement from "./DropdownElement";


const DropDownList = ({ data }) => {

    return (
        <Box mt='40px'>
            {data.map((data, i) => <DropdownElement data={data} />)}
        </Box>
    )
}

export default DropDownList;