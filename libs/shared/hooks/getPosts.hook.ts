import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

import { getRequestGithubApi } from '../apis/githubApi/githubApiCommon.api'
import { getRequestGithubRaw } from '../apis/githubRaw/githubRawCommon.api'
import { Post, PostName } from '../types/posts.type'

const getPostByName = async (path: string) => {
  const rawMDX = await getRequestGithubRaw<string>(path, {
    responseType: 'text',
  })

  const { frontmatter, content } = await compileMDX<{
    title: string
    date: string
    tags: string[]
  }>({
    source: rawMDX,
    components: {
      // push components
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    },
  })

  const id = path.replace(/\.mdx$/, '')

  const postObj: Post = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  }

  return postObj
}

const getPosts = async (path: string) => {
  const postInfoList = await getRequestGithubApi<PostName[]>(path)

  const filesList = postInfoList
    .map((postInfo) => postInfo.path)
    .filter((path2) => path2.endsWith('.mdx'))

  const reqList: Array<Promise<Post>> = []

  filesList.forEach((file) => {
    const promisePost = getPostByName(file)
    reqList.push(promisePost)
  })

  const resolvedPosts = await Promise.all(reqList)

  return resolvedPosts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export { getPostByName, getPosts }
