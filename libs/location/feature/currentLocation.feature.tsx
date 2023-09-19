import { headers } from 'next/headers'

import { currentLocationName } from '../data-access/currentLocationName.data-access'

export default function CurrentLocation() {
  const headersList = headers()
  const headerUrl = headersList.get('x-url') || ''

  return currentLocationName(headerUrl)
}
