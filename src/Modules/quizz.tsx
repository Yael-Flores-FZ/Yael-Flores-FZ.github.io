import React, { useState } from 'react';

interface Question {
  section: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

const quiz: Question[] = [
  {
    section: 'Historia y cultura',
    text: '¿En qué país se originaron las carnitas?',
    options: ['España', 'México', 'Argentina', 'Perú'],
    correctAnswer: 'México',
  },
  {
    section: 'Historia y cultura',
    text: '¿Qué estado mexicano es conocido como la cuna de las carnitas?',
    options: ['Jalisco', 'Michoacán', 'Oaxaca', 'Puebla'],
    correctAnswer: 'Michoacán',
  },
  {
    section: 'Historia y cultura',
    text: "¿Qué significa la palabra 'carnitas'?",
    options: ['Carne en trozos pequeños', 'Carne suave', 'Carne frita', 'Carne con especias'],
    correctAnswer: 'Carne en trozos pequeños',
  },
  {
    section: 'Ingredientes y preparación',
    text: '¿Qué tipo de carne se utiliza para preparar carnitas tradicionales?',
    options: ['Res', 'Pollo', 'Cerdo', 'Cordero'],
    correctAnswer: 'Cerdo',
  },
  {
    section: 'Ingredientes y preparación',
    text: '¿Qué utensilio es tradicionalmente indispensable para cocinar carnitas?',
    options: ['Sartén de hierro', 'Comal de barro', 'Cazo de cobre', 'Olla de acero inoxidable'],
    correctAnswer: 'Cazo de cobre',
  },
  {
    section: 'Ingredientes y preparación',
    text: '¿Qué se utiliza para darle sabor a las carnitas?',
    options: ['Mantequilla y sal', 'Aceite vegetal y especias', 'Manteca de cerdo y hierbas aromáticas', 'Caldo de pollo'],
    correctAnswer: 'Manteca de cerdo y hierbas aromáticas',
  },
  {
    section: 'Partes del cerdo y curiosidades',
    text: '¿Cómo se llama la parte del cerdo conocida por su textura suave y grasosa?',
    options: ['Maciza', 'Cuerito', 'Nana', 'Lengua'],
    correctAnswer: 'Cuerito',
  },
  {
    section: 'Partes del cerdo y curiosidades',
    text: '¿Qué parte del cerdo es famosa por ser crujiente y deliciosa?',
    options: ['Buche', 'Cachete', 'Oreja', 'Tripita'],
    correctAnswer: 'Tripita',
  },
  {
    section: 'Partes del cerdo y curiosidades',
    text: '¿Cómo se llama la mezcla de diferentes partes del cerdo en un taco de carnitas?',
    options: ['Mixta', 'Surtida', 'Combinada', 'Especial'],
    correctAnswer: 'Surtida',
  },
  {
    section: 'Tradiciones y acompañamientos',
    text: '¿Con qué ingredientes se suelen acompañar los tacos de carnitas?',
    options: ['Lechuga y crema', 'Cebolla, cilantro y salsa', 'Frijoles y queso', 'Limón y aguacate'],
    correctAnswer: 'Cebolla, cilantro y salsa',
  },
  {
    section: 'Tradiciones y acompañamientos',
    text: '¿Qué bebida es tradicional para acompañar las carnitas?',
    options: ['Horchata', 'Pulque', 'Agua de jamaica', 'Todas las anteriores'],
    correctAnswer: 'Todas las anteriores',
  },
  {
    section: 'Tradiciones y acompañamientos',
    text: '¿En qué tipo de evento suelen servirse carnitas con frecuencia?',
    options: ['Bodas', 'Fiestas patronales', 'Reuniones familiares', 'Todas las anteriores'],
    correctAnswer: 'Todas las anteriores',
  },
];

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleAnswerClick = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  return (
    <div>
      <h2 className='text-4xl text-twoColor mb-4'>¿Qué tanto sabes de las carnitas?</h2>
      {quiz.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3 className='text-3xl mb-2'>{question.section}</h3>
          <p>{question.text}</p>
          <div>
            {question.options.map((option) => {
              const isSelected = selectedAnswers[index] === option;
              const isCorrect = option === question.correctAnswer;
              const style = isSelected
                ? { backgroundColor: isCorrect ? 'green' : 'red', color: 'white' }
                : { backgroundColor: 'white', color: 'black' };

              return (
                <button
                  className='rounded-xl'
                  key={option}
                  onClick={() => handleAnswerClick(index, option)}
                  style={{
                    ...style,
                    border: '1px solid #ccc',
                    padding: '10px',
                    margin: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;