import React from 'react';

const Parts = () => {
    return (
        <section className='flex flex-col gap-4'>
            <h2 className='text-4xl text-twoColor'>Tipos de tacos de carnitas según las partes del cerdo</h2>
            <p>
                En las carnitas, se utilizan diferentes partes del cerdo, y cada una tiene su propio nombre. Aquí tienes los nombres de los tipos de tacos de carnitas según las partes del cerdo:
            </p>

            <article>
                <h3 className='text-3xl mb-2'>Carnes principales</h3>
                <ul>
                    <li><strong>Maciza:</strong> carne magra, sin grasa</li>
                    <li><strong>Surtida:</strong> mezcla de varias partes</li>
                    <li><strong>Costilla:</strong> con un poco de hueso</li>
                </ul>
            </article>

            <article>
                <h3 className='text-3xl mb-2'>Partes grasosas o suaves</h3>
                <ul>
                    <li><strong>Buche:</strong> estómago</li>
                    <li><strong>Nana:</strong> útero</li>
                    <li><strong>Cuerito:</strong> piel cocida, suave</li>
                    <li><strong>Tripita:</strong> intestinos limpios y crujientes</li>
                    <li><strong>Cachete:</strong> mejilla del cerdo, suave y jugosa</li>
                    <li><strong>Chamorro:</strong> parte de la pierna, muy suave</li>
                </ul>
            </article>

            <article>
                <h3 className='text-3xl mb-2'>Partes crujientes o especiales</h3>
                <ul>
                    <li><strong>Oreja:</strong> cartílago, textura crujiente</li>
                    <li><strong>Lengua:</strong> suave y jugosa</li>
                    <li><strong>Hígado:</strong> sabor fuerte y característico</li>
                    <li><strong>Corazón:</strong> de textura firme</li>
                    <li><strong>Sesos:</strong> suave y cremoso</li>
                </ul>
            </article>
        </section>
    );
};

export default Parts;