import React from 'react';
import Pdf from './Modules/pdf.tsx';
import Parts from './Modules/parts.tsx';
import Tools from './Modules/tools.tsx';
import Quizz from './Modules/quizz.tsx';
import Puzzle from './Modules/puzzle.tsx';
import CrossWord from './Modules/crossWord.tsx';
import EditImage from './Modules/editImage.tsx';
import VideoIntro from './Modules/videoIntro.tsx';
import VideoReceta from './Modules/videoReceta.tsx';
import Conclusions from './Modules/conclusions.tsx';
import Introduction from './Modules/introduction.tsx';
import AlphabetSoup from './Modules/alphabetSoup.tsx';

function App() {
  return (
    <div
      className='w-full flex justify-center bg-fiveColor text-white p-16'
      // className='w-full bg-cover flex justify-center text-white p-16'
      // style={{ backgroundImage: 'url(/images/bg1.jpg)' }} 2 3 9
      // pdf, video, partes del cerdo
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 App bg-threeColor p-16">
          <Introduction />
          <VideoIntro />

          <VideoReceta />
          <Pdf />

          <Parts />
          <EditImage />

          <Tools />
          <Quizz />

          <AlphabetSoup />
          <CrossWord />

          <Puzzle />
          
          <Conclusions />
      </div>

    </div>
  );
}

export default App;