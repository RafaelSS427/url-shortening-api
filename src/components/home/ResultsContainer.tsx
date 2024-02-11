'use client'

import { Link } from '@/types'
import { ItemResult } from './'
import { Container } from '../'

interface Props {
    links: Link[]
}

const ResultsContainer = ({ links }:Props) => {
    return (
        <Container className="flex flex-col gap-4 pb-4 pt-[calc((216px/2)+20px)] sm:pt-[calc((200px/2)+20px)] lg:pt-[calc((152px/2)+20px)]">
            {
                links.map(({ originalLink, shortLink }) => (
                    <ItemResult
                        key={shortLink.split('/').pop()}
                        originalLink={originalLink}
                        shortLink={shortLink}
                    />
                ))
            }
        </Container>
    )
}

export default ResultsContainer