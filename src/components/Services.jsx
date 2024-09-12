import { CardService } from './CardService'
import { TitleSection } from './TitleSection'
// import ortodoncia from '../assets/orto.webp'
import endodoncia from '../assets/endodoncia.webp'
// import cirugia from '../assets/cirugia.webp'
import protesis from '../assets/protesis.webp'
import periodoncia from '../assets/periodoncia.webp'
// import odontopediatria from '../assets/odontopediatria.webp'

// eslint-disable-next-line react/prop-types
export const Services = ({ divRef }) => {
  const servicesInformation = [
    {
      id: 1,
      title: 'Rehabilitación Oral',
      description: 'Restaura la función y estética dental. Incluye procedimientos como coronas, puentes, implantes dentales y prótesis removibles.',
      img: protesis,
      alt: 'Tratamiento de Rehabilitación Oral'
    },
    {
      id: 2,
      title: 'Limpieza Dental',
      description: 'Trata enfermedades de las encías y tejidos circundantes, cirugía y mantenimiento a largo plazo para prevenir la pérdida de dientes.',
      img: periodoncia,
      alt: 'Tratamiento de periodoncia'
    },
    {
      id: 3,
      title: 'Endodoncia',
      description: 'Trata las enfermedades de la pulpa dental, como caries profundas o infecciones. El objetivo es salvar el diente y aliviar el dolor.',
      img: endodoncia,
      alt: 'Tratamiento de endodoncia'
    }
    // {
    //   id: 4,
    //   title: 'Odontopediatría',
    //   description: 'Atención dental de niños, incluyendo revisión, tratamiento de caries y educación en higiene oral.',
    //   img: odontopediatria,
    //   alt: 'Tratamiento de Odontopediatría'
    // },
    // {
    //   id: 5,
    //   title: 'Cirugía',
    //   description: 'Las cirugías llegan a ser necesarias, desde extracciones dentales hasta cirugías maxilofaciales de terceros molares.',
    //   img: cirugia,
    //   alt: 'Cirugías'
    // },
    // {
    //   id: 6,
    //   title: 'Rehabilitación Oral',
    //   description: 'Restaura la función y estética dental. Incluye procedimientos como coronas, puentes, implantes dentales y prótesis removibles.',
    //   img: protesis,
    //   alt: 'Tratamiento de Rehabilitación Oral'
    // }
  ]

  return (
    <section className='w-full flex justify-center items-center mt-6' id='services' ref={divRef}>
      <div className='w-full px-4 flex justify-center items-center flex-col max-w-7xl'>
        <TitleSection title='Servicios' />
        <section className='grid grid-cols-1 mt-10 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20'>
          {
            servicesInformation.map((item) => (
              <CardService
                key={item.id}
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
