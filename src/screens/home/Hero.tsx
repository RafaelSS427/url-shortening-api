import { Container, HeroIcon } from '@/components'
import { Button } from '@/components/ui/Button'
import Balancer from 'react-wrap-balancer'

export const Hero = () => {
  return (
    <section className="mb-40 md:mb-0 md:h-[calc(800px-222px)] overflow-hidden pb-3 md:py-0">
      <Container>
        <div className="grid md:gap-8 xl:gap-0 md:grid-cols-12">
          {/* <div className="grid py-8 md:gap-8 xl:gap-0 md:py-[105px] md:grid-cols-12"> */}
          <div className="mr-auto text-center md:text-start place-self-center md:col-span-7 order-1 md:order-none">
            <h1 className="md:max-w-md mb-4 text-4xl tracking-normal leading-none md:text-5xl xl:text-6xl font-[600] text-veryDarkBlue">
              <Balancer>
                More than just shorter links
              </Balancer>
            </h1>
            <p className="md:max-w-lg mb-6 font-light md:mb-8 md:text-md md:text-xl text-grayishViolet">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button className="py-3" href="#">
              Get Started
            </Button>
          </div>
          <div className="mb-10 md:mt-0 md:col-span-5 md:flex">

            <div className="w-full overflow-visible">
              <div className="w-[calc(100%+150px)] ml-[20px] md:ml-[10px]">
                <div className="w-full md:w-[733px] md:h-[450px]">
                  <HeroIcon />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>


    </section>
  )
}