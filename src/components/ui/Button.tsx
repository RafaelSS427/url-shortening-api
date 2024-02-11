import { ButtonHTMLAttributes, FC, HTMLProps, PropsWithChildren } from 'react'
import {clsx} from 'clsx'
import dynamic from 'next/dynamic'

const Link = dynamic(() => import('next/link'))

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: HTMLProps<HTMLElement>['className'],
    href?: string
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, className, href, ...rest }) => {

    const classes = clsx('py-2 px-5 bg-cyan text-white rounded-full transition-colors hover:bg-cyan-300', className)

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        )
    }

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    )
}