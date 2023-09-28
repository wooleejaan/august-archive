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
const putGithubImage = cache(
  async <T>(
    imgPath: string,
    imgName: string,
    base64Image: string,
    currentSha: string,
  ): Promise<T> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REPOS_BASE_URL}/contents/images/${imgPath}/${imgName}.png`,
      {
        cache: 'force-cache',
        method: 'PUT',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({
          message: `upload ${imgName} image from notion`,
          content: base64Image,
          sha: currentSha,
        }),
      },
    )

    if (!res.ok) {
      // This will activate the closest `error.ts` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const resObject = await res.json()
    return resObject
  },
)

export { putGithubImage }
