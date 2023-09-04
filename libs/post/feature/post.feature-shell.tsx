/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable @next/next/no-img-element */
import { memo } from 'react'

import classNames from 'classnames/bind'

import { countHeadings } from '../data-access/countHeadings.data-access'
import { extractHeadingsId } from '../data-access/extractHeadingsId.data-access'
import {
  CodeContainerProps,
  HeadingProps,
  ImageContainerProps,
  ParagraphProps,
  PostProps,
  SourcesProps,
  SpacingProps,
  YoutubeVideoProps,
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
        <a href={`#${props.id}`}>{text}</a>
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
        <a href={`#${props.id}`}>{text}</a>
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
        <a href={`#${props.id}`}>{text}</a>
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
  width = 16 * 22,
  height = 9 * 22,
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
function YouTubeVideo({
  width = 16 * 22,
  height = 9 * 22,
  yId,
}: YoutubeVideoProps) {
  return (
    <div
      className={cx('youtubeContainer')}
      style={{
        width,
        height,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${yId}`}
        width={width}
        height={height}
        title="portfoilo youtube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}
function CodeContainer({ children, ...props }: CodeContainerProps) {
  return (
    <div className={cx('codeContainer')} {...props}>
      {children}
    </div>
  )
}
function Sources({ loq, ...props }: SourcesProps) {
  return (
    <footer {...props}>
      <h1 className={cx('h1', 'ch')}>
        <a href="#출처">출처</a>
      </h1>
      {loq.map((quotation) => (
        <p className={cx('paragraph')} key={quotation}>
          {quotation}
        </p>
      ))}
    </footer>
  )
}

Post.H1 = Heading1
Post.H2 = Heading2
Post.H3 = Heading3
Post.P = Paragraph
Post.SP = memo(Spacing)
Post.I = ImageContainer
Post.Y = YouTubeVideo
Post.C = CodeContainer
Post.SR = Sources

export { Post }
