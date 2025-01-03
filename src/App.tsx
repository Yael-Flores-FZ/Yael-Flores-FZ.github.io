import React from 'react';
import Puzzle from './Modules/puzzle.tsx';
import CrossWord from './Modules/crossWord.tsx';
import EditImage from './Modules/editImage.tsx';
import AlphabetSoup from './Modules/alphabetSoup.tsx';

function App() {
  return (
    <div
      className='bg-cover flex justify-center text-white p-16'
      style={{ backgroundImage: 'url(/images/bg1.jpg)' }}
    >
      <div className="App bg-fourColor p-16">

        <section className='flex flex-col md:flex-row'>

          <div className='flex flex-col text-justify gap-2 justify-start w-full md:w-1/2 mb-16 md:mb-0'>
            <span>Hola,
              <span className='text-red-500'>mi nombre es</span>
            </span>
            <h1
              className='text-5xl text-red-500 mb-4'
            >Yael Flores
            </h1>
            <p>¡Bienvenidos al curso online "El Arte de Hacer Carnitas"!</p>
            <p>Mi nombre es Armando Yael Flores Zamudio, y será un placer acompañarte en este delicioso viaje culinario. A lo largo de este curso, aprenderás las técnicas tradicionales y los secretos mejor guardados para preparar unas carnitas perfectas: jugosas, doraditas y llenas de sabor, como las que encuentras en los mejores mercados y fondas de México.</p>
            <p>Ya sea que desees impresionar a tu familia, deleitar a tus amigos o incluso iniciar tu propio negocio, este curso está diseñado para que puedas dominar el proceso paso a paso, desde la elección de los ingredientes hasta el momento de servir.</p>
            <p>Prepárate para ensuciarte las manos, experimentar con sabores y, sobre todo, disfrutar de una experiencia única que celebra nuestra tradición gastronómica. ¡Vamos a cocinar juntos!</p>
          </div>

          <div className='flex justify-center items-center'>
            <div
              className='w-1/2'
            >
              <img
                src="/images/profileWithoutBackground.png"
                alt="Imagen del Administrador"
                className='w-full h-full'
              />
            </div>
          </div>

        </section>

        <section className='my-16'>
          <EditImage />
          <AlphabetSoup />
          <CrossWord />
          <Puzzle />
        </section>
      </div>

    </div>
  );
}

export default App;