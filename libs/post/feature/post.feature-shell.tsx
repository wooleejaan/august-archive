/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @next/next/no-img-element */
import {
  Children,
  DetailedReactHTMLElement,
  Fragment,
  cloneElement,
  isValidElement,
} from 'react'

import classNames from 'classnames/bind'

import { countHeadings } from '../data-access/countHeadings.data-access'
import { HeadingProps, PostProps } from '../shared/types/post.type'
import styles from './post.module.scss'

const cx = classNames.bind(styles)

function Post({ children, ...props }: PostProps) {
  const idCounters: { [key: string]: number } = {
    h1: 1,
    h2: 1,
    h3: 1,
  }

  const totalHeadings = countHeadings(children, Heading1, Heading2, Heading3)

  const extractedIds: string[] = []
  const onIdExtracted = (id: string) => {
    extractedIds.push(id)

    if (totalHeadings === extractedIds.length) {
      // ids for toc
      console.log(extractedIds)
    }
  }

  return (
    <article {...props}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        const childProps = child.props as HeadingProps

        if (child.type === Heading1) {
          const id = `h1-${idCounters.h1}`
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
        if (child.type === Heading2) {
          const id = `h2-${idCounters.h2}`
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
        if (child.type === Heading3) {
          const id = `h3-${idCounters.h3}`
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
    </article>
  )
}
function Heading1({ children, text, onIdExtracted, ...props }: HeadingProps) {
  const idCounters: { [key: string]: number } = {
    h1: 1,
    h2: 1,
    h3: 1,
  }

  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h1 className={cx('h1')} {...props}>
        {text}
      </h1>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        const childProps = child.props as HeadingProps

        if (child.type === Heading1) {
          const id = `${props.id}&h1-${idCounters.h1}`
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
        if (child.type === Heading2) {
          const id = `${props.id}&h2-${idCounters.h2}`
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
        if (child.type === Heading3) {
          const id = `${props.id}&h3-${idCounters.h3}`
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
    </section>
  )
}
function Heading2({ children, text, onIdExtracted, ...props }: HeadingProps) {
  const idCounters: { [key: string]: number } = {
    h1: 1,
    h2: 1,
    h3: 1,
  }

  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h2 className={cx('h2')} {...props}>
        {text}
      </h2>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        const childProps = child.props as HeadingProps

        if (child.type === Heading1) {
          const id = `${props.id}&h1-${idCounters.h1}`
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
        if (child.type === Heading2) {
          const id = `${props.id}&h2-${idCounters.h2}`
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
        if (child.type === Heading3) {
          const id = `${props.id}&h3-${idCounters.h3}`
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
    </section>
  )
}
function Heading3({ children, text, onIdExtracted, ...props }: HeadingProps) {
  const idCounters: { [key: string]: number } = {
    h1: 1,
    h2: 1,
    h3: 1,
  }

  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h3 className={cx('h3')} {...props}>
        {text}
      </h3>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        const childProps = child.props as HeadingProps

        if (child.type === Heading1) {
          const id = `${props.id}&h1-${idCounters.h1}`
          idCounters.h1 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        if (child.type === Heading2) {
          const id = `${props.id}&h2-${idCounters.h2}`
          idCounters.h2 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        if (child.type === Heading3) {
          const id = `${props.id}&h3-${idCounters.h3}`
          idCounters.h3 += 1
          return (
            <Fragment key={childProps.text}>
              {cloneElement(
                child as DetailedReactHTMLElement<any, HTMLElement>,
                {
                  id,
                  ...childProps,
                },
              )}
            </Fragment>
          )
        }
        return null
      })}
    </section>
  )
}
function Spacing() {
  return <div></div>
}
function Paragraph() {
  return <p></p>
}
function ImageContainer() {
  return <img src="" alt="" />
}
function Video() {
  return <div></div>
}
function CodeContainer() {
  return <div></div>
}
function Summary() {
  return <header></header>
}
function Sources() {
  return <footer></footer>
}

Post.H1 = Heading1
Post.H2 = Heading2
Post.H3 = Heading3
Post.SP = Spacing
Post.P = Paragraph
Post.I = ImageContainer
Post.V = Video
Post.C = CodeContainer
Post.SH = Summary
Post.SR = Sources

export { Post }
