import { FC, HTMLProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import { BrandIcon } from '..';

type Data = {
    Icon: ReactNode,
    title: string,
    description: string
}

interface Props {
    className: HTMLProps<HTMLElement>['className'];
    data: Data
}

export const ItemStatitic:FC<Props> = ({ className, data }) => {
  const { Icon, title, description } = data

  return (
    <div className={clsx("bg-white lg:h-56 rounded-lg pt-14 lg:pl-6 px-10 lg:pr-12 pb-10 lg:pb-6 relative", className)}>
        <div className="bg-darkViolet h-[68px] w-[68px] grid place-content-center absolute -top-[calc(64px/2)] left-[50%] -translate-x-[50%] lg:left-6 lg:-translate-x-0 rounded-full">
          { Icon }    
        </div>
        <h2 className="text-center lg:text-start text-lg mb-3 font-[800] text-veryDarkViolet">{ title }</h2>
        <p className="text-center lg:text-start text-sm text-grayishViolet">{ description }</p>
    </div>
  )
}