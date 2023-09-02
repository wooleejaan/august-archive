/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElementConstructor, ReactElement } from 'react'

interface PostMeta {
  id: string
  title: string
  date: string
  tags: string[]
}

interface PostName {
  name: string
  path: string
}

type Post = {
  meta: PostMeta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

export type { PostMeta, PostName, Post }
