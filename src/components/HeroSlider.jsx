import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import heroDes from '../assets/CHIC1.webp'
import hero2 from '../assets/CHIC2.webp'

export const HeroSlider = ({ divRef }) => {
  const optionsSliderReviews = {
    type: 'fade',
    rewind: true,
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    pauseOnFocus: false
  }

  return (
    <Splide
      aria-labelledby='Slider Reviews'
      options={optionsSliderReviews}
    >
      <SplideSlide className='flex justify-center items-center review'>
        <section className='w-full h-[calc(100svh-89px)] bg-violet-400 max-h-[900px] flex justify-center items-center flex-col relative' id='home' ref={divRef}>
          <img
            src={hero2}
            alt='Foto de sonrisa perfecta'
            className='w-auto h-full object-cover object-center'
            loading='eager'
            width='2000'
            height='1333'
          />
          <div className='absolute bottom-5 bg-cyan-200/20 backdrop-blur-xl p-5 rounded-xl'>
            <h1 className='font-bold text-4xl text-center text-gray-900'>Dra. Claudia Olmos</h1>
            <p className='font-semibold text-xl text-center text-gray-900'>Cuidamos tu sonrisa</p>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className='flex justify-center items-center review'>
        <section className='w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative' id='home' ref={divRef}>
          <img
            src={heroDes}
            alt='Foto de sonrisa perfecta'
            className='w-full h-full object-cover object-center'
            loading='eager'
            width='2000'
            height='1333'
          />
          <div className='absolute bottom-5 bg-cyan-200/20 backdrop-blur-xl p-5 rounded-xl'>
            <h1 className='font-bold text-4xl text-center text-gray-900'>Dra. Claudia Olmos</h1>
            <p className='font-semibold text-xl text-center text-gray-900'>Cuidamos tu sonrisa</p>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  )
}
