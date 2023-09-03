/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  DetailedReactHTMLElement,
  Fragment,
  JSXElementConstructor,
  cloneElement,
  isValidElement,
} from 'react'

import { HeadingProps } from '../shared/types/post.type'

export default function UiChildOfHeadingIdGenerator({
  children,
  H1Componet,
  H2Componet,
  H3Componet,
  propsId,
  onIdExtracted,
  isPostComponent,
}: {
  children: React.ReactNode
  H1Componet: JSXElementConstructor<any>
  H2Componet: JSXElementConstructor<any>
  H3Componet: JSXElementConstructor<any>
  propsId?: string
  onIdExtracted?: (id: string) => void
  isPostComponent: boolean
}) {
  const idCounters: { [key: string]: number } = {
    h1: 1,
    h2: 1,
    h3: 1,
  }

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        const childProps = child.props as HeadingProps

        if (child.type === H1Componet) {
          const id = isPostComponent
            ? `h1-${idCounters.h1}`
            : `${propsId}&h1-${idCounters.h1}`
          idCounters.h1 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  onIdExtracted,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        if (child.type === H2Componet) {
          const id = isPostComponent
            ? `h2-${idCounters.h2}`
            : `${propsId}&h2-${idCounters.h2}`
          idCounters.h2 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  onIdExtracted,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        if (child.type === H3Componet) {
          const id = isPostComponent
            ? `h3-${idCounters.h3}`
            : `${propsId}&h3-${idCounters.h3}`
          idCounters.h3 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  onIdExtracted,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        return null
      })}
    </>
  )
}
