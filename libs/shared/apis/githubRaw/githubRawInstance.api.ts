import axios from 'axios'

import { CustomAxiosInterface } from '../../types/instance.type'

export const githubRawInstance: CustomAxiosInterface = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/wooleejaan/august-archive-posts/main',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  withCredentials: true,
  timeout: 30000,
})
