import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
  } from '@chakra-ui/react'
import SidebarContent from "./SideBarContent";


const Sidebar = ({ isOpen, variant, onClose, content }) => {
    
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={0}
            w="410px"
            top={0}
            height="100%"
            bg="#195418"
            p={10}
        >
            {content && <SidebarContent menuContent={content} />}
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'sm'}>
            <DrawerOverlay>
                <DrawerContent bg="#195418">
                        <DrawerCloseButton color={'white'}/>
                    <DrawerHeader>Documentation</DrawerHeader>
                    <DrawerBody>
                        {content && <SidebarContent menuContent={content} />}
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>     
    )
        
}

export default Sidebar;