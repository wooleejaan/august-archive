import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { CustomAxiosInterface } from '../../../types/instance.type'
import { logOnDev } from '../../helpers/logOnDev.helper'

export const githubRawInstance: CustomAxiosInterface = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_RAWS_BASE_URL}`,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  withCredentials: true,
  timeout: 30000,
})

/* request interceptors */
githubRawInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
     * request 직전 공통으로 진행할 작업
     */
    if (config && config.headers) {
      // inject token
    }

    if (process.env.NODE_ENV === 'development') {
      const { method, url } = config
      logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`)
    }

    return config
  },
  (error: AxiosError | Error): Promise<AxiosError> =>
    /**
     * request 에러 시 작업
     */
    Promise.reject(error),
)

/* response interceptors */
githubRawInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    /**
     * http status가 20X이고, http response가 then으로 넘어가기 직전 호출
     */
    if (process.env.NODE_ENV === 'development') {
      const { method, url } = response.config
      const { status } = response
      logOnDev(`🚁 [API] ${method?.toUpperCase()} ${url} | Response ${status}`)
    }

    return response
  },
  (error: AxiosError | Error): Promise<AxiosError> => {
    /**
     * http status가 20X가 아니고, http response가 catch로 넘어가기 직전 호출
     */
    if (process.env.NODE_ENV === 'development') {
      // if (axios.isAxiosError(error)) {
      //   const { message } = error
      //   const { method, url } = error.config as InternalAxiosRequestConfig
      //   const { status, statusText } = error.response as AxiosResponse
      //   logOnDev(
      //     `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`,
      //   )
      //   switch (status) {
      //     case 401: {
      //       // 로그인 필요 메시지 연결
      //       break
      //     }
      //     case 403: {
      //       // 권한 필요 메시지 연결
      //       break
      //     }
      //     case 404: {
      //       // 잘못된 요청 메시지 연결
      //       break
      //     }
      //     case 500: {
      //       // 서버 문제 발생 메시지 연결
      //       break
      //     }
      //     default: {
      //       // 알 수 없는 오류 발생 메시지 연결
      //       break
      //     }
      //   }
      // } else {
      //   logOnDev(`🚨 [API] | Error ${error.message}`)
      // }
    }
    return Promise.reject(error)
  },
)
