/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, JSXElementConstructor, isValidElement } from 'react'

import { HeadingProps } from '../shared/types/post.type'

/**
 *
 * @param children children
 * @param beCompared Heading1, 2, 3
 * @example
 * ```tsx
 * function Post({ children, ...props }: PostProps) {
 *   const heading1List = findChildHeading(children, Heading1)
 *   const heading2List = findChildHeading(children, Heading2)
 *   const heading3List = findChildHeading(children, Heading3)
 * }
 * ```
 */
function findChildHeading(
  children: React.ReactNode,
  beCompared: JSXElementConstructor<any>,
): Array<HeadingProps | undefined> {
  const childList: Array<HeadingProps | undefined> = []

  Children.toArray(children).forEach((child) => {
    if (isValidElement(child) && child.type === beCompared) {
      childList.push(child.props)
    }
  })
  return childList
}

export { findChildHeading }
