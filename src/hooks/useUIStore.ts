import { UIContext } from '@/context'
import { useContext } from 'react'

export const useUIStore = () => {
  const store = useContext(UIContext)

  return {
    ...store
  }
}