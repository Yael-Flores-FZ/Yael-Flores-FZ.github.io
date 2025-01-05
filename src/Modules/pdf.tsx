import React from 'react';

const pdfURL = '/carnitas.pdf';

const Pdf = () => {
    return(
        <div className='h-[500px]'>
            <iframe
            src={pdfURL}
            width="100%"
            height="500px"
            style={{ border: 'none' }}
        ></iframe>
        </div >
    );
};

export default Pdf