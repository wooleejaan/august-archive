import { cache } from 'react'

/**
 *
 * @description SSG 적용된 API Handler
 * @example
 * ```bash
 * # how to revalidate
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getGithubSha = cache(async <T>(): Promise<T> => {
  const currentFileResponse = await fetch(
    `${process.env.NEXT_PUBLIC_REPOS_BASE_URL}/contents/${process.env.NEXT_PUBLIC_IMAGE_PATH}`,
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

  if (!currentFileResponse.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const currentFileData = await currentFileResponse.json()
  const currentSha = currentFileData[0].sha

  return currentSha
})

export { getGithubSha }
