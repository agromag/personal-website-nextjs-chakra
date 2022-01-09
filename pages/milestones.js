import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/BlogPost'
import { SearchIcon } from '@chakra-ui/icons'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        

    return (
        <>
            <Head>
                <title> Agromag - Welcome to our Fiki </title>
            </Head>
            <Container sidebarContent = { posts }>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="85%"
                >
                
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Welcome to Agromag 
                        </Heading>
                        
                        {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const data = await getAllFilesFrontMatter('milestones')
    const posts = data.reverse();

    return { props: { posts } }
}