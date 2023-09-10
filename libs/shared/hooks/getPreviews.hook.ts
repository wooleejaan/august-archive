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

export default getPreviews
