import React, { useState } from "react";

const EditImage = () => {
    return (
        <div className='flex justify-center w-full mb-16'>
            <div className='w-1/2'>
                <img
                    src="/images/editImage.jpeg"
                    alt="Imagen de un taco"
                    className='w-full h-full'
                />
            </div>
        </div>
    );
};

export default EditImage;