'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { z } from 'zod'
import { useLocalStorage } from 'usehooks-ts'
import { Container, Input, LoadingIcon } from '@/components'
import { Button } from '@/components/ui/Button'
import { Link } from '@/types'
import { fetchShorten } from '@/services'
import { clsx } from 'clsx'

const ResultsContainerNoSSR = dynamic(() => import('@/components/home/ResultsContainer'))

const dynamicClass = process.env.NODE_ENV === "development"
    ? "lg:bg-[url('/bg-shorten-desktop.svg')] before:bg-[url('/bg-shorten-mobile.svg')]"
    : "lg:bg-[url('/url-shortening-api/bg-shorten-desktop.svg')] before:bg-[url('/url-shortening-api/bg-shorten-mobile.svg')]"

export const Results = () => {
    const [inputError, setInputError] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [links, setLinks] = useLocalStorage<Link[]>('links', [])
    const [isLoading, setIsLoading] = useState(false)

    const handleShorten = async () => {
        if (!inputRef.current) return;

        inputError && setInputError('')

        const value = inputRef.current.value

        if (value.length === 0) {
            return setInputError('Please add link')
        }

        const { success } = z.string().url().safeParse(value)

        if (!success) {
            return setInputError('Invalid link')
        }

        setIsLoading(true)

        const myURL = await fetchShorten(value)

        if (!myURL) {
            setIsLoading(false)
            return setInputError("Failed to fetch data")
        }

        setLinks(links => (
            [
                {
                    originalLink: value,
                    shortLink: myURL
                },
                ...links
            ]
        ))

        inputRef.current.value = ''
        setIsLoading(false)
    }

    return (
        <section className="relative w-full bg-lightViolet">
            <Container className="absolute -top-[calc(216px/2)] sm:-top-[calc(200px/2)] lg:-top-[calc(152px/2)] left-0 right-0 flex flex-col gap-4">

                <div
                    className={
                        clsx(
                            "bg-[#3a3053] relative bg-cover w-full rounded-lg p-8 lg:p-12 before:content-[''] before:absolute before:top-0 before:right-0 lg:before:bg-none before:bg-cover before:h-[70%] before:w-[70%]",
                            dynamicClass
                        )
                    }
                >
                    <div className="flex flex-col gap-y-10 gap-x-6 lg:flex-row lg:gap-4 z-10">
                        <div className="flex-1">
                            <Input
                                placeholder="Shorten a link here..."
                                className="w-full h-16 sm:h-14"
                                aria-describedby="input-error"
                                error={inputError.length > 0}
                                helperText={inputError}
                                ref={inputRef}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleShorten()
                                    }
                                }}
                            />
                        </div>
                        <div className="relative">
                            <Button disabled={isLoading} onClick={handleShorten} className="rounded-xl h-16 sm:h-14 w-full">
                                {
                                    isLoading ? (
                                        <span className="flex items-center gap-2 text-sm">
                                            <LoadingIcon />
                                            Loading...
                                        </span>
                                    ) : (
                                        <span>Shorten it!</span>
                                    )
                                }

                            </Button>
                        </div>

                    </div>

                </div>
            </Container>

            <ResultsContainerNoSSR links={links} />
        </section>
    )
}