import { CardAbout } from "./CardAbout";

import Claudia from "../assets/doctora.webp";

export const AboutDoctors = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="w-full grid grid-cols-1 gap-8 place-content-center max-w-7xl px-4 mb-10">
        <CardAbout
          name="Dra. Claudia Karina Olmos Miranda"
          imgSrc={Claudia}
          imgAlt="Foto de perfil de la Dra. Claudia Karina Olmos Miranda"
          reverse
        >
          <li>Cuento con más de 15 años de experiencia en la odontología.</li>
          <li>
            Mi trabajo me respalda, como tambien mis pacientes satisfechos.
          </li>
          <li>Cuento con equipo y material de primer nivel para antenderte.</li>
          <li>Mi compromiso es devolverte la seguridad al sonreir.</li>
        </CardAbout>
      </div>
    </section>
  );
};
