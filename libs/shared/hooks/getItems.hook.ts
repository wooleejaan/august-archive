import { cache } from 'react'

import { getRequestGithubApi } from '../apis/githubApi/githubApiCommon.api'
import { PostName } from '../types/posts.type'

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

export default getItems
