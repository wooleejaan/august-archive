/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import { countHeadings } from '../data-access/countHeadings.data-access'
import { HeadingProps, PostProps } from '../shared/types/post.type'
import UiChildOfHeadingIdGenerator from '../ui/childOfHeadingIdGenerator.ui'
import styles from './post.module.scss'

const cx = classNames.bind(styles)

function Post({ children, ...props }: PostProps) {
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
      <UiChildOfHeadingIdGenerator
        H1Componet={Heading1}
        H2Componet={Heading2}
        H3Componet={Heading3}
        onIdExtracted={onIdExtracted}
        isPostComponent={true}
      >
        {children}
      </UiChildOfHeadingIdGenerator>
    </article>
  )
}
function Heading1({ children, text, onIdExtracted, ...props }: HeadingProps) {
  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h1 className={cx('h1')} {...props}>
        {text}
      </h1>
      <UiChildOfHeadingIdGenerator
        H1Componet={Heading1}
        H2Componet={Heading2}
        H3Componet={Heading3}
        propsId={props.id}
        onIdExtracted={onIdExtracted}
        isPostComponent={false}
      >
        {children}
      </UiChildOfHeadingIdGenerator>
    </section>
  )
}
function Heading2({ children, text, onIdExtracted, ...props }: HeadingProps) {
  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h2 className={cx('h2')} {...props}>
        {text}
      </h2>
      <UiChildOfHeadingIdGenerator
        H1Componet={Heading1}
        H2Componet={Heading2}
        H3Componet={Heading3}
        propsId={props.id}
        onIdExtracted={onIdExtracted}
        isPostComponent={false}
      >
        {children}
      </UiChildOfHeadingIdGenerator>
    </section>
  )
}
function Heading3({ children, text, onIdExtracted, ...props }: HeadingProps) {
  if (props.id && onIdExtracted) {
    onIdExtracted(props.id)
  }

  return (
    <section>
      <h3 className={cx('h3')} {...props}>
        {text}
      </h3>
      <UiChildOfHeadingIdGenerator
        H1Componet={Heading1}
        H2Componet={Heading2}
        H3Componet={Heading3}
        propsId={props.id}
        onIdExtracted={onIdExtracted}
        isPostComponent={false}
      >
        {children}
      </UiChildOfHeadingIdGenerator>
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
