import { cache } from 'react'

import { GithubImageResponse } from '../types/githubapi.type'

/**
 *
 * @description SSG 적용된 API Handler
 * @example
 * ```bash
 * # how to revalidate
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getGithubImage = cache(
  async <T extends GithubImageResponse>(
    imgPath: string,
    imgName: string,
  ): Promise<T | Record<string, never>> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REPOS_BASE_URL}/contents/images/${imgPath}/${imgName}.png`,
      {
        cache: 'force-cache',
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )

    if (!res.ok) {
      return {}
    }

    const imgUrl = await res.json()
    return imgUrl
  },
)

export { getGithubImage }
