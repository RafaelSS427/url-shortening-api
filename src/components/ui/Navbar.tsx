'use client'

import Image from 'next/image'
import { Container } from './'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button } from './Button'
import { useUIStore } from '@/hooks/useUIStore'
import { getBasePath } from '@/utils'

const links = ['Feature', 'Pricing', 'Resources']

export const Navbar = () => {
    const { open, openDialog, closeDialog } = useUIStore()

    return (
        <nav>
            <Container component="header" className="py-8 lg:py-12 flex items-center font-semibold text-grayishViolet">
                <div className="relative w-[131px] h-10 mr-10">
                    <Image priority fill src={ getBasePath('logo-dark.svg') } alt="Logo Url Shorting API" className="object-scale-down" />
                </div>
                {/* <Image priority src="/logo.svg" width="131" height="33" alt="Logo Url Shorting API" className="mr-10" /> */}
                <ul className="list-none hidden md:inline-flex flex-1">
                    {
                        links.map(link => (
                            <li className="mr-8" key={link}>
                                <Link href="#" className="transition-colors hover:text-darkViolet">
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden md:flex items-center gap-3">
                    <Link href="#" className="py-2 px-5 transition-opacity hover:opacity-50">Login</Link>
                    {/* <Link href="#" className="py-2 px-5 bg-cyan text-white rounded-full transition-opacity hover:opacity-50">Sign Up</Link> */}
                    <Button href="#">
                        Sign Up
                    </Button>
                </div>
                <div className="flex-1 md:hidden" />
                <button className="md:hidden" onClick={() => {
                    if (open) {
                        return closeDialog()
                    }

                    openDialog()
                }}>
                    {
                        !open ? (
                            <Bars3Icon className="w-10 h-10" />
                        ) : (
                            <XMarkIcon className="w-10 h-10" />
                        )
                    }
                </button>
            </Container>
        </nav>
    )
}

export default Navbar