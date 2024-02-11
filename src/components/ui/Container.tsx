import { HTMLProps, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface Props {
    component?: 'div' | 'section' | 'header' | 'main' | 'footer'
    className?: HTMLProps<HTMLElement>['className']
}

export const Container = ({ children, component:Component = 'div', className }: PropsWithChildren<Props>) => (
    <Component className={clsx('container mx-auto max-w-[1111px] px-4', className)}>
        {children}
    </Component>
)