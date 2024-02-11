'use client'

import { UIProvider } from '@/context'
import { FC, PropsWithChildren } from 'react'
import { Provider as ProviderBalancer } from 'react-wrap-balancer'

export const Providers:FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ProviderBalancer>
      <UIProvider>
        { children }
      </UIProvider>
    </ProviderBalancer>
  )
}