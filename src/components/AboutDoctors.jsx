import { CardAbout } from './CardAbout'

import Claudia from '../assets/doctora.webp'

export const AboutDoctors = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col'>
      <div className='w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10'>
        <CardAbout
          name='Dra. Claudia Karina Olmos Miranda'
          imgSrc={Claudia}
          imgAlt='Foto de perfil de la Dra. Claudia Karina Olmos Miranda'
          reverse
        >
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex?</li>
        </CardAbout>
      </div>
    </section>
  )
}
