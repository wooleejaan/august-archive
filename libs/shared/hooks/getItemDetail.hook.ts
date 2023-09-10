import { cache } from 'react'

import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

import { Post } from '@/libs/post/feature/post.feature-shell'

import { getRequestGithubRaw } from '../apis/githubRaw/githubRawCommon.api'
import { PostTypes } from '../types/posts.type'

/**
 *
 * @description ISR 적용된 API Handler
 * @example
 * ```bash
 * # revalidate 하는 방법
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
export const revalidate = 86400

/**
 * @param {string} folderName 폴더명
 * @param {number} pageNum 페이지 번호 1~10, 11~20, 21~30, ...
 * @param {string} fileName 포스트 제목
 * @use
 * ```js
 * const data = await getItemDetail('projects', 1, 'main-project-1')
 * ```
 */
const getItemDetail = cache(
  async (folderName: string, pageNum: number, title: string) => {
    const path = `${folderName}/${pageNum}/${title}.mdx`
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
        Post,
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

    const postObj: PostTypes = {
      meta: {
        id,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags,
      },
      content,
    }

    return postObj
  },
)

export default getItemDetail
