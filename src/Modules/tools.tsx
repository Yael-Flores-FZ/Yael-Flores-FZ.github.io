import React from 'react';

const Tools: React.FC = () => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-3xl mb-2'>Utensilios y herramientas que ayudan a lograr el sabor y textura característicos. Aquí tienes una lista:</p>

            <ul>
                <li>- Cazo de cobre: Tradicional para cocinar las carnitas, distribuye el calor uniformemente.</li>
                <li>- Fogón o quemador: Fuente de calor para calentar el cazo.</li>
                <li>- Pala de madera: Para mover la carne durante la cocción.</li>
                <li>- Colador de metal: Para retirar los trozos de carne del cazo.</li>
                <li>- Cuchillo afilado: Para cortar las piezas del cerdo.</li>
                <li>- Tenedor grande: Para manejar la carne caliente.</li>
            </ul>

            <h3 className='text-3xl mb-2'>Complementos auxiliares:</h3>
            <ul>
                <li>- Tina o recipiente grande: Para marinar las piezas de cerdo.</li>
                <li>- Tabla de picar: Para cortar los ingredientes y la carne.</li>
                <li>- Servilletas o papel estraza: Para escurrir el exceso de grasa.</li>
                <li>- Pinzas metálicas: Para manejar las porciones calientes.</li>
            </ul>

            <h3 className='text-3xl mb-2'>Adicionales para servir:</h3>
            <ul>
                <li>- Tortillero: Para mantener las tortillas calientes.</li>
                <li>- Salsas y recipientes: Para acompañar los tacos.</li>
            </ul>

            <p>Estos utensilios son esenciales para lograr unas carnitas al estilo tradicional y práctico.</p>
        </div>
    );
};

export default Tools;