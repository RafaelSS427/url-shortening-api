import Balancer from 'react-wrap-balancer'
import { Button } from '@/components/ui/Button'

export const BoostLinks = () => {
    return (
        <section
            // style={{ backgroundImage: "url(/bg-boost-desktop.svg)" }}
            className="bg-[#3a3053] bg-[url('/bg-boost-mobile.svg')] h-72 lg:h-auto bg-cover lg:bg-[url('/bg-boost-desktop.svg')] flex justify-center items-center pb-12 pt-14"
        >
            <div className="flex flex-col gap-8">
                <h1 className="text-center text-2xl md:text-3xl font-[600] text-white">
                    <Balancer>
                        Boost your links today
                    </Balancer>
                </h1>
                <div className="flex justify-center">
                    <div>
                        <Button className="py-3 px-8 text-sm" href="#">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}