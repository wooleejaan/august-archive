/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, JSXElementConstructor, isValidElement } from 'react'

function countHeadings(
  children: React.ReactNode,
  H1Component: JSXElementConstructor<any>,
  H2Component: JSXElementConstructor<any>,
  H3Component: JSXElementConstructor<any>,
): number {
  let count = 0

  // 자식 컴포넌트를 순회하며 Heading 컴포넌트를 찾음
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (
        child.type === H1Component ||
        child.type === H2Component ||
        child.type === H3Component
      ) {
        count += 1
      }
      // 자식 컴포넌트의 하위 컴포넌트도 확인
      if (child.props.children) {
        count += countHeadings(
          child.props.children,
          H1Component,
          H2Component,
          H3Component,
        )
      }
    }
  })

  return count
}

export { countHeadings }
