import React, { useState } from 'react'
import {
    useColorMode,
    Box
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Header from './Header'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

const Container = ({ sidebarContent, children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
  
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    return (
        <>
            <Sidebar
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
                content = {sidebarContent}
            />

            <Box ml={!variants?.navigationButton && 460}>
                <Header
                    showSidebarButton={variants?.navigationButton}
                    onShowSidebar={toggleSidebar}
                />

                {children}

            </Box>
        </>
    )
}

export default Container