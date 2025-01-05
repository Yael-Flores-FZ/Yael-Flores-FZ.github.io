import React from 'react';

const Conclusions = () => {
  return (
    <footer className='flex flex-col col-span-2 gap-8'>
      <h2 className='text-4xl text-twoColor'>Conclusiones sobre un curso en línea para aprender a hacer carnitas</h2>
      
      <section>
        <h3 className='text-3xl mb-2'>Utilidad del curso:</h3>
        <ul className='flex flex-col gap-4'>
          <li>
            - El curso es altamente útil para quienes desean aprender a preparar carnitas desde casa, 
            especialmente si no tienen acceso a un experto local o a una taquería tradicional.
          </li>
          <li>
            - Permite a los participantes conocer las técnicas tradicionales, ingredientes esenciales 
            y utensilios necesarios, preservando una tradición culinaria mexicana.
          </li>
          <li>
            - Los recursos digitales (videos, listas de compra, guías paso a paso) facilitan el 
            aprendizaje y permiten repetir el proceso cuantas veces sea necesario.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className='text-3xl mb-2'>Dificultades encontradas:</h3>
        <ul className='flex flex-col gap-4'>
          <li>
            <strong>- Acceso a utensilios tradicionales:</strong> Muchos alumnos pueden no tener un cazo 
            de cobre o un fogón adecuado en casa.
          </li>
          <li>
            <strong>- Ingredientes locales:</strong> Conseguir algunos ingredientes específicos (como 
            manteca de cerdo fresca o hierbas mexicanas) puede ser complicado fuera de México.
          </li>
          <li>
            <strong>- Seguimiento del proceso:</strong> La cocción de las carnitas requiere monitoreo constante 
            y cuidado, lo que puede ser difícil de transmitir completamente en formato virtual.
          </li>
          <li>
            <strong>- Duración del curso:</strong> Las carnitas toman tiempo en cocinarse, lo que puede 
            alargar las sesiones o complicar la práctica en tiempo real.
          </li>
        </ul>
      </section>
      
      <section>
        <h3 className='text-3xl mb-2'>Aspectos no factibles de adaptar completamente al formato en línea:</h3>
        <p>
          <strong>Experiencia sensorial:</strong> Es difícil transmitir el aroma, textura y sabor exactos a través 
          de una pantalla, elementos esenciales para saber si las carnitas están en su punto o si se están 
          realizando de la manera correcta.
        </p>
      </section>
      
      <section>
        <p>
          En resumen, un curso en línea para hacer carnitas es una excelente herramienta educativa, 
          pero enfrenta limitaciones inherentes a la naturaleza práctica y sensorial del proceso. 
          Con adaptaciones inteligentes y un enfoque cultural, puede ser una experiencia enriquecedora 
          y efectiva para los amantes de la cocina tradicional mexicana. 🌮
        </p>
      </section>
    </footer>
  );
};

export default Conclusions;