import { HTMLAttributes } from 'react'

interface UiSpacingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never
  direction?: 'horizontal' | 'vertical'
  size: number
}

export default function UiSpacing({
  direction = 'vertical',
  size,
  ...props
}: UiSpacingProps) {
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
