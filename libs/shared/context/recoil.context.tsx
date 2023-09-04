'use client'

import React from 'react'

import { RecoilRoot } from 'recoil'

import { RecoilRootProviderProps } from '../types/recoil.type'

export default function RecoilRootProvider({
  children,
}: RecoilRootProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>
}
