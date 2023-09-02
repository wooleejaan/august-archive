/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

import { CommonResponse } from '../../types/instance.type'
import { githubRawInstance } from './githubRawInstance.api'

/* get 요청 */
export const getRequestGithubRaw = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubRawInstance.get<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

// /* post 요청 */
export const postRequestGithubRaw = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubRawInstance.post<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* delete 요청 */
export const deleteRequestGithubRaw = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubRawInstance.delete<CommonResponse<T>>(
    url,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* put 요청 */
export const putRequestGithubRaw = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubRawInstance.put<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}

/* patch 요청 */
export const patchRequestGithubRaw = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await githubRawInstance.patch<CommonResponse<T>>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  )
  return response.data
}
