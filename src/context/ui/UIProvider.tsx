import { FC, PropsWithChildren, useState } from 'react'
import { UIContext } from './UIContext'

interface Props {}

export const UIProvider:FC<PropsWithChildren<Props>> = ({ children }) => {
    const [open, setOpen] = useState(false)

    const closeDialog = () => {
        setOpen(false)
        document.querySelector('body')!.style.overflow = 'auto'
    }
    
    const openDialog = () => {
        setOpen(true) 
        document.querySelector('body')!.style.overflow = 'hidden'
    }

    return (
        <UIContext.Provider value={{
            open,
            closeDialog,
            openDialog
        }}>
            { children }
        </UIContext.Provider>
    )
}