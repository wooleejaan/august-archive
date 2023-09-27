/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

import { CommonResponse } from '../../types/instance.type'
import { githubApiInstance } from './githubApiInstance.api'

/* get 요청 */
export const getRequestGithubApi = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubApiInstance.get<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

// /* post 요청 */
export const postRequestGithubApi = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubApiInstance.post<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* delete 요청 */
export const deleteRequestGithubApi = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubApiInstance.delete<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* put 요청 */
export const putRequestGithubApi = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubApiInstance.put<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* patch 요청 */
export const patchRequestGithubApi = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubApiInstance.patch<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}
