import { cache } from 'react'

import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

import { Post } from '@/libs/post/feature/post.feature-shell'

import { PostName, PostTypes } from '../../types/posts.type'
import { getRequestGithubApi } from '../apis/githubApi/githubApiCommon.api'
import { getRequestGithubRaw } from '../apis/githubRaw/githubRawCommon.api'

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

/**
 * @param {string} folderName 폴더명
 * @param {number} pageNum 페이지 번호 1~10, 11~20, 21~30, ...
 * @use
 * ```js
 * const data = await getItems('posts', 1)
 * const data = await getItems('projects', 11)
 * ```
 */
const getItems = cache(async (folderName: string, pageNum: number) => {
  const itemList = await getRequestGithubApi<PostName[]>(
    `contents/${folderName}/${pageNum}`,
  )

  const filesList = itemList
    .map((item) => item.path)
    .filter((path) => path.endsWith('.mdx'))

  const fileNameList = filesList.map((file) => {
    /**
     * `/` : 정규표현식 패턴을 시작한다
     * `\/` : 슬래시 문자(/)를 찾는다
     * `([^/]+)` : 슬래시 문자(/)를 제외한 모든 문자들을 찾는다
     * `\.mdx` : '.mdx' 문자열을 정확히 일치시킨다
     * `$` : 패턴이 끝난다
     */
    const regex = /\/([^/]+)\.mdx$/
    const match = file.match(regex) as RegExpMatchArray
    return match[1]
  })

  return fileNameList.sort()
})

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
}
/**
 *
 * @description ISR 적용된 API Handler
 * @example
 * ```bash
 * # revalidate 하는 방법
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getPosts = cache(async (folderName: string) => {
  const postInfoList = await getRequestGithubApi<PostName[]>(
    `contents/${folderName}/`,
  )

  const filesList = postInfoList
    .map((postInfo) => postInfo.path)
    .filter((path2) => path2.endsWith('.mdx'))

  const reqList: Array<Promise<PostTypes>> = []

  filesList.forEach((file) => {
    const promisePost = getPostByName(file)
    reqList.push(promisePost)
  })

  const resolvedPosts = await Promise.all(reqList)

  return resolvedPosts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
})

/**
 * @param {string} folderName 폴더명
 * @use
 * ```js
 * const data = await getPreviews('posts')
 * const data = await getPreviews('projects')
 * ```
 */
const getPreviews = cache(async (folderName: string) => {
  const previewList = await getRequestGithubApi<PostName[]>(
    `contents/preview/${folderName}/`,
  )

  const filesList = previewList
    .map((preview) => preview.path)
    .filter((path) => path.endsWith('.mdx'))

  const fileNameList = filesList.map((file) => {
    /**
     * `/` : 정규표현식 패턴을 시작한다
     * `\/` : 슬래시 문자(/)를 찾는다
     * `([^/]+)` : 슬래시 문자(/)를 제외한 모든 문자들을 찾는다
     * `\.mdx` : '.mdx' 문자열을 정확히 일치시킨다
     * `$` : 패턴이 끝난다
     */
    const regex = /\/([^/]+)\.mdx$/
    const match = file.match(regex) as RegExpMatchArray
    return match[1]
  })

  return fileNameList.sort()
})

export { getItemDetail, getItems, getPostByName, getPosts, getPreviews }
