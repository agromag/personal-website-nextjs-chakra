import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '../../lib/mdx'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'

export default function Blog({ mdxSource, frontMatter, data }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <BlogLayout frontMatter={frontMatter} data={data}>{content}</BlogLayout>
}

export async function getStaticPaths() {
    const posts = await getFiles('milestones')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('milestones', params.slug)
    const response = await getAllFilesFrontMatter('milestones')
    const data = response.reverse()

    return { props: { ...post, data } }
}

