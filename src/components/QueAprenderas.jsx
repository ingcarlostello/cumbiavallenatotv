import React from 'react';
import videoCourse from '../Videos/video.mp4'

const QueAprenderas = () => {
    return (
        <section id="queAprenderas">
            <h1 className="xs:text-4xl text-center md:text-6xl font-sans font-bold text-gray-900 my-8">Que Aprenderás</h1>
            <div  className="grid grid-cols-2 gap-2 p-4 justify-items-center">
                <div>
                    <video 
                        controls 
                        src={videoCourse} 
                        style={{width: 700, height: 'auto'}}
                    /> 
                </div>
                <div className="bg-red-300">
                    <p>Add a description of your offer and key benefits. What it is and how it helps your customer. How will your product change your customer's life. How will this help solve the customer's issues in the future.</p>
                </div>           
            </div>
        </section>
    );
};

export default QueAprenderas;