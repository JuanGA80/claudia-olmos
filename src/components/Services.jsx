import { CardService } from './CardService'
import { TitleSection } from './TitleSection'
import ortodoncia from '../assets/orto.webp'
import endodoncia from '../assets/endodoncia.webp'
import cirugia from '../assets/cirugia.webp'
import implante from '../assets/implante.jpg'
import periodoncia from '../assets/periodoncia.webp'
import general from '../assets/general.jpg'
import odontopediatria from '../assets/odontopediatria.webp'

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {
  const servicesInformation = [
    {
      id: 1,
      title: 'Implantes',
      description: 'Restaura la función y estética dental. Incluye procedimientos como coronas, puentes, implantes dentales y prótesis removibles.',
      img: implante,
      alt: 'Tratamiento de implante dental'
    },
    {
      id: 2,
      title: 'Odontología General',
      description: 'Trata enfermedades de las encías y tejidos circundantes, cirugía y mantenimiento a largo plazo para prevenir la pérdida de dientes.',
      img: general,
      alt: 'Tratamiento de periodoncia'
    },
    {
      id: 3,
      title: 'Ortodoncia',
      description: 'Trata las enfermedades de la pulpa dental, como caries profundas o infecciones. El objetivo es salvar el diente y aliviar el dolor.',
      img: ortodoncia,
      alt: 'Tratamiento de ortodoncia'
    },
    {
      id: 4,
      title: 'Endodoncia',
      description: 'Trata las enfermedades de la pulpa dental, como caries profundas o infecciones. El objetivo es salvar el diente y aliviar el dolor.',
      img: endodoncia,
      alt: 'Tratamiento de endodoncia'
    },
    {
      id: 5,
      title: 'Cirugía Maxilofacial',
      description: 'Las cirugías llegan a ser necesarias, desde extracciones dentales hasta cirugías maxilofaciales de terceros molares.',
      img: cirugia,
      alt: 'Cirugías'
    },
    {
      id: 6,
      title: 'Periodoncia',
      description: 'Restaura la función y estética dental. Incluye procedimientos como coronas, puentes, implantes dentales y prótesis removibles.',
      img: periodoncia,
      alt: 'Tratamiento de Periodoncia'
    },
    {
      id: 7,
      title: 'Odontopediatría',
      description: 'Atención dental de niños, incluyendo revisión, tratamiento de caries y educación en higiene oral.',
      img: odontopediatria,
      alt: 'Tratamiento de Odontopediatría'
    }
  ]

  const getClasses = (id) => {
    if (id === 0 || id === 1 || id === 2) {
      return 'lg:col-span-4'
    } else if (id === 3 || id === 4 || id === 5 || id === 6) {
      return 'lg:col-span-3 lg:text-sm'
    }
  }

  return (
    <section className='w-full flex justify-center items-center mt-6' id='services' ref={divRef}>
      <div className='w-full px-4 flex justify-center items-center flex-col max-w-7xl'>
        <TitleSection title='Servicios' />
        <small className='text-primary'>Da click en la imagen para saber más</small>
        <section className='w-full grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20'>
          {
            servicesInformation.map((item, i) => (
              <CardService
                key={item.id}
                className={getClasses(i)}
                title={item.title}
                description={item.description}
                img={item.img}
                alt={item.alt}
              />
            ))
          }
        </section>
      </div>
    </section>
  )
}
