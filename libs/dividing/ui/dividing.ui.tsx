import { HTMLAttributes } from 'react'

interface UiDividingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never
  lineWeight?: number
  lineColor: string
  lineOpacity?: number
}

export default function UiDividing({
  lineWeight = 1,
  lineColor,
  lineOpacity = 1,
  ...props
}: UiDividingProps) {
  return (
    <div
      style={{
        flex: 'none',
        width: '100%',
        borderBottom: `${lineWeight}px solid ${lineColor}`,
        opacity: lineOpacity,
      }}
      {...props}
    />
  )
}
