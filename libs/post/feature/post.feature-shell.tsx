/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @next/next/no-img-element */
import { memo } from 'react'

import classNames from 'classnames/bind'

import { countHeadings } from '../data-access/countHeadings.data-access'
import { extractHeadingsId } from '../data-access/extractHeadingsId.data-access'
import {
  HeadingProps,
  ImageContainerProps,
  ParagraphProps,
  PostProps,
  SpacingProps,
} from '../shared/types/post.type'
import UiChildOfHeadingIdGenerator from '../ui/childOfHeadingIdGenerator.ui'
import styles from './post.module.scss'

const cx = classNames.bind(styles)

function Post({ children, ...props }: PostProps) {
  const totalHeadings = countHeadings(children, Heading1, Heading2, Heading3)
  const { handleIdExtracted: onIdExtracted } = extractHeadingsId(totalHeadings)

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
      <h1 className={cx('h1', 'ch')} {...props}>
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
      <h2 className={cx('h2', 'ch')} {...props}>
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
      <h3 className={cx('h3', 'ch')} {...props}>
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
function Paragraph({ text, color, ...props }: ParagraphProps) {
  return (
    <p
      className={cx('paragraph')}
      style={{
        color,
      }}
      {...props}
    >
      {text}
    </p>
  )
}
function Spacing({ direction = 'vertical', size, ...props }: SpacingProps) {
  return (
    <div
      style={{
        flex: 'none',
        width: direction === 'horizontal' ? `${size}px` : undefined,
        height: direction === 'vertical' ? `${size}px` : undefined,
      }}
      {...props}
    />
  )
}
function ImageContainer({
  width = 350,
  height = 350,
  imgSrc,
  imgDesc,
  ...props
}: ImageContainerProps) {
  return (
    <>
      <div
        className={cx('container', 'imgContainer')}
        style={{ width, height }}
      >
        <img className={cx('img')} src={imgSrc} alt={imgDesc} {...props} />
      </div>
      <div className={cx('container')} style={{ width }}>
        <span className={cx('imgDesc')}>{imgDesc}</span>
      </div>
    </>
  )
}
function Video() {
  return <div></div>
}
function CodeContainer() {
  return <div></div>
}
function Sources() {
  return <footer></footer>
}

Post.H1 = Heading1
Post.H2 = Heading2
Post.H3 = Heading3
Post.P = Paragraph
Post.SP = memo(Spacing)
Post.I = ImageContainer
Post.V = Video
Post.C = CodeContainer
Post.SR = Sources

export { Post }
