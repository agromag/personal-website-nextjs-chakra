import { Button, Box, Text, Flex, IconButton, Link } from "@chakra-ui/react"
import { useState } from "react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router"

const DropdownElement = ({ data }) => {
    
    
    const router = useRouter()

    const { asPath } = router;

    const splitedPath = asPath.split('#')[1];
    const path = asPath.includes(data.slug);

    const [isOpen, setIsOpen] = useState(path)


    return (
        <Box mt='20px'>
            <Flex justifyContent="space-between">
                <Button
                    as="a"
                            href={`/milestones/${data.slug}`}
                            textTransform={'uppercase'}
                            fontWeight={'bold'}
                            background={'none'}
                    color={'#fff'}
                    size="sm"
                    _hover={{}}
                    
                        >
                            {data.title}
                        </Button>
                        
                            <IconButton
                                aria-label='Search database'
                                icon={ isOpen ? <ChevronUpIcon /> :  <ChevronDownIcon />}
                                variant='ghost'
                                color='white'
                    onClick={() => setIsOpen(!isOpen)}
                    _hover={{}}
                    outline={'none'}
                    __css={{outline: 'none'}}
                    
                            />
                    </Flex> 
                {isOpen && <Box>
                {data.chapters.map((child, i) => (
                    <Box
                        ml={"30px"}
                        borderLeft={splitedPath === child.toLowerCase().replaceAll(' ', '-') ? '3px solid #606d8d' : '3px solid #263051'}
                        p={'5px'} key={i}
                        pl={'10px'}
                        color="#fff"
                     
                       
                    >
                        <Link as="a" onClick={() => router.push(`/milestones/${data.slug}/#${child.toLowerCase().replaceAll(' ','-')}`)} >{child}</Link>
                    </Box>
                ))}
            </Box>}
                 </Box>
    )
}

export default DropdownElement;