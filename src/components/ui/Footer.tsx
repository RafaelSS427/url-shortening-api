import Image from 'next/image'
import { Container } from './'
import { SocialMedia } from './SocialMedia'
import Link from 'next/link'

const CLASSES_LINKS = 'transition-colors text-white/50 text-sm font-light hover:text-cyan/90 max-w-max' 

export const Footer = () => {
    return (
        <footer className="bg-veryDarkViolet py-12">
            <Container className="grid gap-y-5 lg:gap-0 grid-cols-12 text-center lg:text-start">
                <div className="col-span-full sm:col-span-6 md:col-span-3 lg:col-span-4">
                <div className="flex justify-center lg:justify-start">
                    <div className="relative w-[131px] h-10">
                        <Image priority fill src="/logo-light.svg" alt="Logo Url Shorting API" className="object-scale-down" />
                    </div>
                </div>
                </div>
                <div className="col-span-full sm:col-span-6 md:col-span-2">
                    <h1 className="font-[600] text-white text-sm mb-5">Features</h1>
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <Link href="#" className={CLASSES_LINKS}>Link Shortening</Link>
                        <Link href="#" className={CLASSES_LINKS}>Branded Links</Link>
                        <Link href="#" className={CLASSES_LINKS}>Link Shortening</Link>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-6 md:col-span-2">
                    <h1 className="font-[600] text-white text-sm mb-5">Resources</h1>
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <Link href="#" className={CLASSES_LINKS}>Blog</Link>
                        <Link href="#" className={CLASSES_LINKS}>Developers</Link>
                        <Link href="#" className={CLASSES_LINKS}>Support</Link>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-6 md:col-span-2">
                    <h1 className="font-[600] text-white text-sm mb-5">Company</h1>
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <Link href="#" className={CLASSES_LINKS}>About</Link>
                        <Link href="#" className={CLASSES_LINKS}>Our Team</Link>
                        <Link href="#" className={CLASSES_LINKS}>Careers</Link>
                        <Link href="#" className={CLASSES_LINKS}>Contact</Link>
                    </div>
                </div>
                <div className="col-span-full sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <div className="flex justify-center lg:justify-start">
                        <SocialMedia />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer