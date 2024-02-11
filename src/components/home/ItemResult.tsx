'use client'

import { FC, useState } from 'react'
import {clsx} from 'clsx'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from '../ui/Button'
import { HiXMark } from 'react-icons/hi2'

interface Props {
    originalLink: string;
    shortLink: string;
}

export const ItemResult: FC<Props> = ({ originalLink, shortLink }) => {
    const [copied, setCopied] = useState(false)

    return (
        <div className="relative py-6 px-8 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex items-center w-full">
                <a className="text-base text-veryDarkBlue font-semibold hover:underline truncate" href={originalLink} target="_blank" rel="noopener noreffer">
                    {originalLink}
                </a>

                <hr className="absolute w-full left-0 top-0 mt-[60px] text-gray/50 md:hidden" />
            </div>

            <div className="flex md:justify-end">
                <div className="grid md:grid-cols-12 gap-4 items-center w-full">

                    <div className="col-span-12 md:col-span-8">
                        <div className="flex md:justify-end">
                            <a className="text-base text-end text-cyan hover:underline" href={shortLink} target="_blank" rel="noopener noreffer">
                                {shortLink}
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">

                        <CopyToClipboard
                            text={shortLink}
                            onCopy={() => !copied && setCopied(true)}
                        >
                            <Button className={clsx("rounded-lg h-full w-full", {
                                "bg-veryDarkBlue": copied
                            })}>
                                {copied ? "Copied!" : "Copy"}
                            </Button>
                        </CopyToClipboard>

                        {/* <Button className="rounded-lg h-full w-full bg-transparent hover:bg-red/10">
                            <HiXMark className="h-6 w-6 text-red" />
                        </Button> */}

                    </div>
                </div>

            </div>

        </div>
    )
}
