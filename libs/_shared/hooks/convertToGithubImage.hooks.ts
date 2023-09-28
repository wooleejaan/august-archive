import { getGithubImage } from '../apis/getGithubImage.api'
import { getGithubSha } from '../apis/getGithubSha.api'
import { putGithubImage } from '../apis/putGithubImage.api'
import {
  GithubImageResponse,
  GithubResponseRoot,
} from '../types/githubapi.type'

const convertToGithubImage = async (
  slug: string,
  index: number,
  originUrl: string,
): Promise<string> => {
  const first = await getGithubImage<GithubImageResponse>(slug, slug + index)

  if (Object.entries(first).length === 0) {
    const response = await fetch(originUrl)
    const imgBuffer = await response.arrayBuffer()
    const base64Image = Buffer.from(imgBuffer).toString('base64')
    // // eslint-disable-next-line no-param-reassign
    // c.image.file.url = `data:image/png;base64,${base64Image}`
    const currentSha = await getGithubSha<string>()
    await putGithubImage<GithubResponseRoot>(
      slug,
      slug + index,
      base64Image,
      currentSha,
    )
    const res = await getGithubImage<GithubImageResponse>(slug, slug + index)

    return res.download_url
  }
  return first.download_url
}

export default convertToGithubImage
