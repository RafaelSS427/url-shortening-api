import clsx from 'clsx'
//import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from '../'
import { FaInstagram, FaSquareFacebook, FaTwitter, FaPinterest } from 'react-icons/fa6'

interface Props {
    direction?: 'row' | 'col'
}

export const SocialMedia = ({ direction = 'row' }: Props) => {
    return (
        <div
            className={
                clsx('flex gap-4 items-center max-w-max', {
                    'flex-col': direction === 'col'
                })
            }
        >
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="transition-colors fill-white hover:!fill-cyan">
                <FaSquareFacebook className="text-white w-5 h-5 transition-colors hover:text-cyan" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/" className="transition-colors fill-white hover:!fill-cyan">
                <FaTwitter className="text-white w-5 h-5 transition-colors hover:text-cyan" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/" className="transition-colors fill-white hover:!fill-cyan">
                <FaPinterest className="text-white w-5 h-5 transition-colors hover:text-cyan" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="transition-colors fill-white hover:!fill-cyan">
                <FaInstagram className="text-white w-5 h-5 transition-colors hover:text-cyan" />
            </a>
        </div>
    )
}