'use client'

import Link from 'next/link'
import { Button } from './Button'
import { useUIStore } from '@/hooks/useUIStore'

const Dialog = () => {
  const { open } = useUIStore()

  return (
    <dialog className="bg-[#3a3053] absolute top-[104px] w-[calc(100%-32px)] rounded-xl mx-4" open={open}>
        <div className="p-4">
          <div className="flex flex-col gap-6 items-center">
            <Link href="#" className="text-base text-white font-[600]">Features</Link>
            <Link href="#" className="text-base text-white font-[600]">Pricing</Link>
            <Link href="#" className="text-base text-white font-[600]">Resources</Link>
          </div>

          <hr className="my-6 text-white/20" />

          <div className="flex flex-col gap-4">
            <Button className="bg-transparent text-center" href="#">Login</Button>
            <Button className="text-center py-3" href="#">Sign Up</Button>
          </div>
        </div>
    </dialog>
  )
}

export default Dialog
