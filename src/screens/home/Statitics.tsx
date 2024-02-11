import Balancer from 'react-wrap-balancer'
import { BrandIcon, Container, CustomizableIcon, DetailedIcon, ItemStatitic } from '@/components'

export const Statitics = () => {
    return (
        <section className="bg-lightViolet py-20">
            <Container>
                <div className="mb-4">
                    <h1 className="text-center mb-3 text-2xl md:text-3xl font-[600] text-veryDarkBlue">
                        <Balancer>
                            Advanced Statitics
                        </Balancer>
                    </h1>
                    <div className="flex justify-center">
                        <p className="text-center md:max-w-lg text-grayishViolet">Track how your links are performing across the web with our advanced statitics dashboard</p>
                    </div>
                </div>

                {/* <div className="relative grid md:grid-cols-3 gap-8 before:content-[''] before:h-2 before:bg-cyan before:absolute before:top-[44%] before:w-full"> */}
                <div className="relative grid md:grid-cols-3 gap-8 before:content-[''] before:w-2 lg:before:h-2 before:bg-cyan before:absolute lg:before:top-[44%] lg:before:left-0 lg:before:-translate-x-0 lg:before:w-full before:h-[calc(100%-8px)] before:left-[50%] before:-translate-x-[50%] before:top-[8px]">
                    <ItemStatitic
                        className="mt-10 lg:mt-8"
                        data={{
                            Icon: <BrandIcon />,
                            title: "Brand Recognition",
                            description: "Boost yout brand recognition with each click. Generic links don't mean a thing. Branded links help instil onfidence in your content."
                        }}
                    />
                    <ItemStatitic
                        className="mt-10 lg:mt-16"
                        data={{
                            Icon: <DetailedIcon />,
                            title: "Detailed Records",
                            description: "Gain insights into who us clicking your links. Knowing when and where people engage with yout content helps inform better decisions."
                        }}
                    />
                    <ItemStatitic
                        className="mt-10 lg:mt-24"
                        data={{
                            Icon: <CustomizableIcon />,
                            title: "Fully Customizable",
                            description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                        }}
                    />
                </div>
            </Container>
        </section>
    )
}
