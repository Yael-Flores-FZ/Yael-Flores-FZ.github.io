import React from 'react';

const Introduction = () => {
    return (
        <header class="flex flex-col md:flex-row">

            <div class="p-4 flex flex-col text-justify gap-2 justify-start w-full md:w-1/2 mb-16 md:mb-0">
                <p>
                    Hola, <span class="text-red-500">mi nombre es</span>
                </p>

                <h1 class="text-5xl text-red-500 mb-4">Yael Flores</h1>

                <p>¡Bienvenidos al curso online "El Arte de Hacer Carnitas"!</p>
                <p>Mi nombre es Armando Yael Flores Zamudio, y será un placer acompañarte en este delicioso viaje culinario. A lo largo de este curso, aprenderás las técnicas tradicionales y los secretos mejor guardados para preparar unas carnitas perfectas: jugosas, doraditas y llenas de sabor, como las que encuentras en los mejores mercados y fondas de México.</p>
                <p>Ya sea que desees impresionar a tu familia, deleitar a tus amigos o incluso iniciar tu propio negocio, este curso está diseñado para que puedas dominar el proceso paso a paso, desde la elección de los ingredientes hasta el momento de servir.</p>
                <p>Prepárate para ensuciarte las manos, experimentar con sabores y, sobre todo, disfrutar de una experiencia única que celebra nuestra tradición gastronómica. ¡Vamos a cocinar juntos!</p>
            </div>

            <div class="flex justify-center items-center">
                <figure class="w-1/2">
                    <img
                        src="/images/profileWithoutBackground.png"
                        alt="Imagen del Administrador"
                        class="w-full h-full object-contain" />
                        <figcaption class="text-center text-sm mt-2">
                            Armando Yael Flores Zamudio
                        </figcaption>
                </figure>
            </div>

        </header>
    );
};

export default Introduction;