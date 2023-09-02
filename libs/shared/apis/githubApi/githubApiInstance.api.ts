import axios from 'axios'

import { CustomAxiosInterface } from '../../types/instance.type'

export const githubApiInstance: CustomAxiosInterface = axios.create({
  baseURL: 'https://api.github.com/repos/wooleejaan/august-archive-posts',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  withCredentials: true,
  timeout: 30000,
})
